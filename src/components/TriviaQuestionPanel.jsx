import { Button, Card } from 'react-bootstrap'
import CorrectResponseOverlay from './CorrectResponseOverlay.jsx'
import IncorrectResponseOverlay from './IncorrectResponseOverlay.jsx'

function TriviaQuestionPanel({
  questionText,
  answers,
  responseState,
  disableAnswers,
  onAnswerSelect
}) {
  return (
    <div className="question-stage">
      {responseState === 'correct' && <CorrectResponseOverlay />}
      {responseState === 'incorrect' && <IncorrectResponseOverlay />}

      <Card.Text>{questionText}</Card.Text>

      <div className="d-flex gap-2 flex-wrap justify-content-center">
        {answers.map((answer) => (
          <Button
            key={answer}
            variant="outline-secondary"
            disabled={disableAnswers}
            onClick={() => onAnswerSelect(answer)}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default TriviaQuestionPanel