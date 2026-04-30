import { Form, Card } from 'react-bootstrap'

function DifficultyFilter({ selectedDifficulty, onDifficultyChange }) {
  const difficulties = ['easy', 'medium', 'hard']

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="h5">Filter by difficulty</Card.Title>
        <Form.Group controlId="difficultyFilterSelect">
          <Form.Label className="visually-hidden">Difficulty</Form.Label>
          <Form.Select
            value={selectedDifficulty}
            onChange={(event) => onDifficultyChange(event.target.value)}
          >
            <option value="">Any difficulty</option>
            {difficulties.map((difficulty) => (
              <option
                key={difficulty}
                value={difficulty}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Card.Body>
    </Card>
  )
}

export default DifficultyFilter
