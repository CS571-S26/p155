import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HighestStreakCard from '../components/HighestStreakCard.jsx'
import CategoryStatsCard from '../components/CategoryStatsCard.jsx'
import DifficultyStatsCard from '../components/DifficultyStatsCard.jsx'
import { loadTriviaStats } from '../utils/triviaStats.js'

function Stats() {
  const [stats, setStats] = useState(() => loadTriviaStats())

  useEffect(() => {
    setStats(loadTriviaStats())

    function handleRefresh() {
      setStats(loadTriviaStats())
    }

    window.addEventListener('focus', handleRefresh)
    window.addEventListener('storage', handleRefresh)

    return () => {
      window.removeEventListener('focus', handleRefresh)
      window.removeEventListener('storage', handleRefresh)
    }
  }, [])

  return (
    <Container className="py-2">
      <h1 className="page-title">Stats Dashboard</h1>
      <p className="page-p">Review your trivia performance across streaks, categories, and difficulty.</p>

      <Row className="mt-4 g-3">
        <Col lg={4}>
          <HighestStreakCard highestStreak={stats.highestStreak} />
        </Col>
        <Col lg={8}>
          <CategoryStatsCard categoryStats={stats.category} />
        </Col>
      </Row>

      <Row className="mt-3 g-3">
        <Col>
          <DifficultyStatsCard difficultyStats={stats.difficulty} />
        </Col>
      </Row>
    </Container>
  )
}

export default Stats
