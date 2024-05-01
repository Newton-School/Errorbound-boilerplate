import { createRoot } from 'react-dom/client'
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if () {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)

  }

  handleClick() {
   
  }

  render() {
    if () {
      // Simulate a JS error
      throw new Error('I crashed!')
    }
    return ;
  }
}

function App() {
  return (
    <div>
      <hr />
     
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
    
        <BuggyCounter />

 
        <BuggyCounter />

    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
