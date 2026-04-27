import { Container } from 'react-bootstrap'
import OpenTriviaDatabaseCredit from '../components/OpenTriviaDatabaseCredit'
import TriviaFactoryCallout from '../components/TriviaFactoryCallout'

function Welcome() {
  return (
    <Container className="py-2">
      <h1 className="page-title">Welcome to the Trivia Factory</h1>
      <p className="page-p">
        Here you can answer trivia questions of many categories, and even suggest new questions!
      </p>
      <p className="page-p">
        Use the navigation bar to switch between the welcome page, the answer question interface, and the suggestion area.
      </p>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 mt-5">
        <OpenTriviaDatabaseCredit />
        <TriviaFactoryCallout />
      </div>
    </Container>
  )
}

export default Welcome
