import React from 'react'

function TestApp() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#8B2332', fontSize: '2rem', marginBottom: '20px' }}>
        React is Working! ✅
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        If you can see this, React is rendering correctly.
      </p>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Now let's check the full app...
      </p>
    </div>
  )
}

export default TestApp

