const overlayStyle = {
  position: 'absolute',
  inset: 0,
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  borderRadius: '0.375rem',
  animation: 'response-overlay-enter 280ms ease-out',
  pointerEvents: 'none'
}

const badgeStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  padding: '0.9rem 1.9rem',
  borderRadius: '999px',
  color: '#fff',
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.0)',
  background: 'linear-gradient(135deg, #dc3545, #b02a37)'
}

function IncorrectResponseOverlay() {
  return (
    <>
      <style>{`@keyframes response-overlay-enter {
        from {
          opacity: 0;
          transform: scale(0.94);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }`}</style>
      <div style={overlayStyle} role="status" aria-live="polite">
        <div style={badgeStyle}>Incorrect!</div>
      </div>
    </>
  )
}

export default IncorrectResponseOverlay