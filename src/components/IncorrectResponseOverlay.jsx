function IncorrectResponseOverlay() {
  return (
    <div className="response-overlay response-overlay-incorrect" role="status" aria-live="polite">
      <div className="response-overlay-badge">Incorrect!</div>
    </div>
  )
}

export default IncorrectResponseOverlay