import { Card } from 'react-bootstrap'
import './StreakDisplay.css'

function StreakDisplay({ streak }) {
  return (
    <Card className="streak-card">
      <Card.Body className="text-center">
        <div className="streak-label">🔥 Current Streak</div>
        <div className="streak-count">{streak}</div>
      </Card.Body>
    </Card>
  )
}

export default StreakDisplay
