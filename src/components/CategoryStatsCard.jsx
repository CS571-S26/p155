import { Card, Table, Badge } from 'react-bootstrap'

function CategoryStatsCard({ categoryStats }) {
  const rows = Object.entries(categoryStats || {})
    .map(([category, counts]) => {
      const correct = counts?.correct ?? 0
      const incorrect = counts?.incorrect ?? 0
      const total = correct + incorrect
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

      return {
        category,
        correct,
        incorrect,
        total,
        accuracy
      }
    })
    .sort((a, b) => b.total - a.total || b.correct - a.correct)

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2" className="h5">Responses by Category</Card.Title>
        {rows.length === 0 ? (
          <div className="text-muted">No category responses yet.</div>
        ) : (
          <div style={{ overflowY: 'auto', maxHeight: '250px' }}>
            <Table striped bordered responsive className="mb-0">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Correct</th>
                  <th>Incorrect</th>
                  <th>Total</th>
                  <th>Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
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
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default CategoryStatsCard
