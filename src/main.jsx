import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import './index.css'

console.log('main.jsx: Starting...');

const rootElement = document.getElementById('root');
console.log('main.jsx: Root element:', rootElement);

if (!rootElement) {
  console.error('main.jsx: Root element not found!');
  document.body.innerHTML = '<h1 style="color: red; padding: 20px;">Error: Root element not found</h1>';
} else {
  console.log('main.jsx: Root element found, attempting to render...');
  
  try {
    console.log('main.jsx: Creating React root...');
    const root = ReactDOM.createRoot(rootElement);
    console.log('main.jsx: React root created, rendering app...');
    
    root.render(
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>,
    )
    
    console.log('main.jsx: Render called successfully');
  } catch (error) {
    console.error('main.jsx: Fatal error:', error);
    rootElement.innerHTML = `
      <div style="padding: 40px; color: red;">
        <h1>Fatal Error</h1>
        <p>${error.message}</p>
        <pre style="background: #f5f5f5; padding: 20px; overflow: auto;">${error.stack}</pre>
      </div>
    `;
  }
}

console.log('main.jsx: Script finished executing');
