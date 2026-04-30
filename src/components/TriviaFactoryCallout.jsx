import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import triviaFactoryLogo from '../assets/TriviaFactoryLogo.png'

function TriviaFactoryCallout() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card
        as={NavLink}
        to="/answer"
        className="mt-4 text-center text-decoration-none"
        style={{ width: '75%', maxWidth: 520, borderWidth: 2, cursor: 'pointer' }}
      >
        <Card.Body>
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center gap-3 px-4 py-4"
            style={{ backgroundColor: 'white', width: '100%' }}
          >
            <img
              src={triviaFactoryLogo}
              alt="Trivia Factory logo"
              style={{
                width: '240px',
                transform: 'scale(1.3)',
                transformOrigin: 'center',
            }}
            />
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
              <div className="fw-semibold" style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '1.45rem', lineHeight: 1.25 }}>
                Start Answering Questions!
              </div>
              <div className="fw-bold" style={{ color: 'var(--accent)', fontSize: '2.8rem', lineHeight: 1 }} aria-hidden="true">
                →
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TriviaFactoryCallout