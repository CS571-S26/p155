import { useEffect, useMemo, useRef, useState } from 'react'
import { Container, Row, Col, Card, Alert, Spinner, Button } from 'react-bootstrap'
import CategoryFilter from '../components/CategoryFilter.jsx'
import DifficultyFilter from '../components/DifficultyFilter.jsx'
import TriviaQuestionPanel from '../components/TriviaQuestionPanel.jsx'
import './AnswerQuestions.css'

const TRIVIA_API_URL = 'https://opentdb.com/api.php?amount=1&type=multiple'
const FETCH_COOLDOWN_MS = 5000

let nextFetchAllowedAt = 0
let activeQuestionRequest = null
let activeRequestKey = ''
const cachedQuestionsByCategory = new Map()

function fetchTriviaQuestion(categoryId, difficulty) {
  const categoryKey = categoryId || 'all'
  const difficultyKey = difficulty || 'any'
  const requestKey = `${categoryKey}:${difficultyKey}`

  if (activeQuestionRequest && activeRequestKey === requestKey) {
    return activeQuestionRequest
  }

  const now = Date.now()
  if (now < nextFetchAllowedAt) {
    if (cachedQuestionsByCategory.has(requestKey)) {
      return Promise.resolve(cachedQuestionsByCategory.get(requestKey))
    }

    return Promise.reject(new Error('Please wait before requesting another question.'))
  }

  nextFetchAllowedAt = now + FETCH_COOLDOWN_MS
  activeRequestKey = requestKey

  const requestUrl = new URL(TRIVIA_API_URL)
  if (categoryId) {
    requestUrl.searchParams.set('category', categoryId)
  }
  if (difficulty) {
    requestUrl.searchParams.set('difficulty', difficulty)
  }

  activeQuestionRequest = fetch(requestUrl)
    .then((response) => {
      if (response.status === 429) {
        throw new Error('Too many requests. Please wait 5 seconds and try again.')
      }

      if (!response.ok) {
        throw new Error('Failed to load question.')
      }

      return response.json()
    })
    .then((data) => {
      if (data.response_code !== 0 || !data.results?.length) {
        throw new Error('Trivia API returned no questions.')
      }

      cachedQuestionsByCategory.set(requestKey, data.results[0])
      return data.results[0]
    })
    .finally(() => {
      activeQuestionRequest = null
      activeRequestKey = ''
    })

  return activeQuestionRequest
}

function AnswerQuestions() {
  const [questionData, setQuestionData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [responseState, setResponseState] = useState('')
  const [isQuestionLocked, setIsQuestionLocked] = useState(false)
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const incorrectOverlayTimeoutRef = useRef(null)

  async function loadQuestion() {
    if (incorrectOverlayTimeoutRef.current) {
      clearTimeout(incorrectOverlayTimeoutRef.current)
      incorrectOverlayTimeoutRef.current = null
    }

    setIsLoading(true)
    setErrorMessage('')
    setResponseState('')
    setIsQuestionLocked(false)
    setCurrentTime(Date.now())

    try {
      const nextQuestion = await fetchTriviaQuestion(
        selectedCategoryId,
        selectedDifficulty
      )
      setQuestionData(nextQuestion)
      setCurrentTime(Date.now())
    } catch (error) {
      setErrorMessage(error.message || 'Unable to fetch trivia question right now. Please try again.')
      setQuestionData(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadQuestion()

    return () => {
      if (incorrectOverlayTimeoutRef.current) {
        clearTimeout(incorrectOverlayTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(Date.now())
    }, 250)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  const cooldownSecondsRemaining = Math.max(
    0,
    Math.ceil((nextFetchAllowedAt - currentTime) / 1000)
  )
  const isNextQuestionDisabled = isLoading || cooldownSecondsRemaining > 0

  const answers = useMemo(() => {
    if (!questionData) {
      return []
    }

    const combinedAnswers = [
      questionData.correct_answer,
      ...questionData.incorrect_answers
    ]

    return combinedAnswers
      .map((answer) => ({ answer, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map((item) => decodeHtmlEntities(item.answer))
  }, [questionData])

  function decodeHtmlEntities(text) {
    const parser = new DOMParser()
    return parser.parseFromString(text, 'text/html').documentElement.textContent || text
  }

  function handleAnswerClick(selectedAnswer) {
    if (!questionData || isQuestionLocked) {
      return
    }

    const decodedCorrectAnswer = decodeHtmlEntities(questionData.correct_answer)

    if (selectedAnswer === decodedCorrectAnswer) {
      setResponseState('correct')
      setIsQuestionLocked(true)
    } else {
      setResponseState('incorrect')

      if (incorrectOverlayTimeoutRef.current) {
        clearTimeout(incorrectOverlayTimeoutRef.current)
      }

      incorrectOverlayTimeoutRef.current = setTimeout(() => {
        setResponseState((currentState) =>
          currentState === 'incorrect' ? '' : currentState
        )
        incorrectOverlayTimeoutRef.current = null
      }, 1100)
    }
  }

  return (
    <Container className="py-2">
      <Row className="mt-2">
        <Col lg={3}>
          <CategoryFilter
            selectedCategoryId={selectedCategoryId}
            onCategoryChange={setSelectedCategoryId}
          />
          <DifficultyFilter
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
          />
          <p className="page-p">
            Filters apply when 'Next Question' is clicked.
          </p>
        </Col>
        <Col lg={9}>
          <h1 className="page-title">Answer Questions</h1>
          <p className="page-p">
            Try your hand at trivia and review answers for sample questions.
          </p>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Trivia question</Card.Title>

              {isLoading && (
                <div className="d-flex align-items-center gap-2">
                  <Spinner animation="border" size="sm" />
                  <span>Loading question...</span>
                </div>
              )}

              {errorMessage && !isLoading && (
                <>
                  <Alert variant="danger" className="mb-0">
                    {errorMessage}
                  </Alert>
                  <div className="next-question-wrap d-flex justify-content-center">
                    <Button onClick={loadQuestion} disabled={isNextQuestionDisabled}>
                      {cooldownSecondsRemaining > 0
                        ? `Next Question (${cooldownSecondsRemaining}s)`
                        : 'Next Question'}
                    </Button>
                  </div>
                </>
              )}

              {questionData && !isLoading && !errorMessage && (
                <>
                  <TriviaQuestionPanel
                    questionText={decodeHtmlEntities(questionData.question)}
                    answers={answers}
                    responseState={responseState}
                    disableAnswers={isQuestionLocked}
                    onAnswerSelect={handleAnswerClick}
                  />
                  <div className="next-question-wrap d-flex justify-content-center">
                    <Button onClick={loadQuestion} disabled={isNextQuestionDisabled}>
                      {cooldownSecondsRemaining > 0
                        ? `Next Question (${cooldownSecondsRemaining}s)`
                        : 'Next Question'}
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AnswerQuestions
