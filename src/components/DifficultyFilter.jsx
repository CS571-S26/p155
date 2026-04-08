import { Form, Card } from 'react-bootstrap'

function DifficultyFilter() {
  const difficulties = ['Easy', 'Medium', 'Hard']

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Filter by difficulty</Card.Title>
        <Form>
          {difficulties.map((difficulty) => (
            <Form.Check
              key={difficulty}
              type="checkbox"
              id={`difficulty-${difficulty}`}
              label={difficulty}
              className="mb-2"
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default DifficultyFilter
