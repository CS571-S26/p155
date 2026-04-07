import { Container } from 'react-bootstrap'

function Welcome() {
  return (
    <Container className="py-5">
      <h1>Welcome to the Trivia Generator</h1>
      <p className="lead">
        Here you can answer trivia questions of many categories, and even create your own sets of questions!
      </p>
      <p>
        Use the navigation bar to switch between the welcome page, the answer question interface, and the workshop area.
        
      </p>
    </Container>
  )
}

export default Welcome
