import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

function Workshop() {
  return (
    <Container className="py-2">
      <h1>Workshop</h1>
      <p className="lead">Create your own trivia question in the workshop.</p>

      <Row className="mt-4">
        <Col lg={8}>
          <Card className="mb-3" bg="info" text="white">
            <Card.Body>
              <Card.Title>Question builder</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="questionText">
                  <Form.Label>Question</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Type the trivia question here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="questionTag">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option>Choose a category</option>
                    <option>General Knowledge</option>
                    <option>History</option>
                    <option>Entertainment</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Geography</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="correctAnswer">
                  <Form.Label>Correct answer</Form.Label>
                  <Form.Control type="text" placeholder="Enter the correct answer" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrectAnswer1">
                  <Form.Label>Incorrect answer 1</Form.Label>
                  <Form.Control type="text" placeholder="Enter an incorrect answer" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrectAnswer2">
                  <Form.Label>Incorrect answer 2</Form.Label>
                  <Form.Control type="text" placeholder="Enter an incorrect answer" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="incorrectAnswer3">
                  <Form.Label>Incorrect answer 3</Form.Label>
                  <Form.Control type="text" placeholder="Enter an incorrect answer" />
                </Form.Group>

                <Button variant="light" type="button">
                  Save draft
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Design tips</Card.Title>
              <Card.Text>
                Keep trivia questions clear, well-scoped, and fun. Mix question types like history, science, and pop culture.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>How to</Card.Title>
              <Card.Text>
                Use this page to create your own trivia questions. In a future iteration, you can save and share your question sets, and even have them appear in the answer question interface for others to try!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Workshop
