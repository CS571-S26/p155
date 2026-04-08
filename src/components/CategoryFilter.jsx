import { Form, Card } from 'react-bootstrap'

function CategoryFilter() {
  const categories = [
    'General Knowledge',
    'History',
    'Entertainment',
    'Science',
    'Sports',
    'Geography'
  ]

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Filter by category</Card.Title>
        <Form>
          {categories.map((category) => (
            <Form.Check
              key={category}
              type="checkbox"
              id={`category-${category}`}
              label={category}
              className="mb-2"
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CategoryFilter
