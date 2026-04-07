import { Container, Card, Button } from 'react-bootstrap'

function AnswerQuestions() {
  return (
    <Container className="py-5">
      <h1>Answer Questions</h1>
      <p className="lead">
        Try your hand at trivia and review answers for sample questions.
      </p>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Sample trivia question</Card.Title>
          <Card.Text>
            What year did the first human land on the Moon?
          </Card.Text>
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="primary">1969</Button>
            <Button variant="outline-secondary">1959</Button>
            <Button variant="outline-secondary">1979</Button>
            <Button variant="outline-secondary">1989</Button>
          </div>
          <div className="text-muted mt-4">
            In a future iteration, this page can include interactive trivia form fields,
            automatic scoring, and personalized question generation.
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AnswerQuestions
