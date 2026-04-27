import { Card } from 'react-bootstrap'
import opentdbImage from '../assets/opentdb.png'


function OpenTriviaDatabaseCredit() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card
        className="mt-4 text-center"
        style={{ width: '75%', maxWidth: 500, borderWidth: 2 }}
      >
        <Card.Body>
          <Card.Title style={{ fontWeight: 700, color: 'var(--navy)' }}>Questions Powered By</Card.Title>
          <Card.Text style={{ fontSize: '1rem' }}>
            This application uses the{' '}
            <a href="https://opentdb.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: 'var(--accent)', textDecoration: 'underline' }}>
              Open Trivia Database
            </a>{' '}
            API for providing free trivia questions.<br />
            <span style={{ fontSize: '0.95em', color: 'var(--text)' }}>
              Special thanks to the Open Trivia Database, and be sure to check them out!
            </span>
          </Card.Text>
          <div className="mb-3">
            <img
              src={opentdbImage}
              alt="Open Trivia Database Logo"
              style={{ maxHeight: '70px', filter: 'drop-shadow(0 2px 6px rgba(31, 40, 64, 0.18))' }}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default OpenTriviaDatabaseCredit
