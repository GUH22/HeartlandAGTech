import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: '#7CB342', fontSize: '2rem', marginBottom: '20px' }}>Something went wrong</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#7CB342', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reload Page
          </button>
          <details style={{ marginTop: '20px', textAlign: 'left', maxWidth: '800px' }}>
            <summary style={{ cursor: 'pointer', color: '#7CB342' }}>Error Details</summary>
            <pre style={{ 
              marginTop: '10px', 
              padding: '20px', 
              backgroundColor: '#f5f5f5', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.875rem'
            }}>
              {this.state.error?.stack}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

