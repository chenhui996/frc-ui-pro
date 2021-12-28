import React from 'react'
import {Button, Divider} from 'antd'
import Button2 from './components/button/index'

function App() {
  return (
    <div className="App">
      <h3>antd button</h3>
      <Button>try again</Button>
      <Divider />

      <h3>custom button</h3>
      <Button2 type="primary" onClick={() => console.log('click')}>
        Targrt Button
      </Button2>
      <Divider />

      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
