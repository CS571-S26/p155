import { Card, Table, Badge } from 'react-bootstrap'

function formatDifficultyLabel(value) {
  if (!value) {
    return 'Unknown'
  }

  return value
    .split(' ')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ')
}

function DifficultyStatsCard({ difficultyStats }) {
  const rows = Object.entries(difficultyStats || {})
    .map(([difficulty, counts]) => {
      const correct = counts?.correct ?? 0
      const incorrect = counts?.incorrect ?? 0
      const total = correct + incorrect
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

      return {
        difficulty,
        label: formatDifficultyLabel(difficulty),
        correct,
        incorrect,
        total,
        accuracy
      }
    })
    .sort((a, b) => b.total - a.total || b.correct - a.correct)

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="h5">Responses by Difficulty</Card.Title>
        {rows.length === 0 ? (
          <div className="text-muted">No difficulty responses yet.</div>
        ) : (
          <Table striped bordered responsive className="mb-0">
            <thead>
              <tr>
                <th>Difficulty</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Total</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.difficulty}>
                  <td>{row.label}</td>
                  <td>{row.correct}</td>
                  <td>{row.incorrect}</td>
                  <td>{row.total}</td>
                  <td>
                    <Badge bg={row.accuracy >= 70 ? 'success' : 'secondary'}>
                      {row.accuracy}%
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  )
}

export default DifficultyStatsCard
