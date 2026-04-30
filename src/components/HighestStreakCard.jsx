import { Card } from 'react-bootstrap'

function HighestStreakCard({ highestStreak }) {
  const displayValue = Number.isFinite(highestStreak) ? highestStreak : 0

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '300px' }}>
        <Card.Title as="h2" className="h5">Highest Streak Achieved</Card.Title>
        <div className="display-4 fw-bold">{displayValue}</div>
        <div className="text-muted">First-try correct answers in a row.</div>
      </Card.Body>
    </Card>
  )
}

export default HighestStreakCard
