import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hellllllooooooo Woorrrllldddd. This app is running on Google Cloud. I integrated a chatbot using Dialogflow CX
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <df-messenger
  location="us-central1"
  project-id="calm-segment-426116-n5"
  agent-id="47b2838f-46a3-433c-b826-f9cd2c8f7213"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="">
  </df-messenger-chat-bubble>
</df-messenger>
    </>
  )
}

export default App
