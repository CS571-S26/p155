import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CategoryFilter from '../components/CategoryFilter.jsx'
import DifficultyFilter from '../components/DifficultyFilter.jsx'

function AnswerQuestions() {
  return (
    <Container className="py-2">
      <Row className="mt-2">
        <Col lg={3}>
          <CategoryFilter />
          <DifficultyFilter />
        </Col>
        <Col lg={9}>
          <h1>Answer Questions</h1>
          <p className="lead">
            Try your hand at trivia and review answers for sample questions.
          </p>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Sample trivia question</Card.Title>
              <Card.Text>
                What year did the first human land on the Moon?
              </Card.Text>
              <div className="d-flex gap-2 flex-wrap justify-content-center">
                <Button variant="info">1969</Button>
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
        </Col>
      </Row>
    </Container>
  )
}

export default AnswerQuestions
