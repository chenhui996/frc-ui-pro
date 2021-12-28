import React from 'react'
import {Button, Divider} from 'antd'
import FRCButton from './components/button/index'

function App() {
  return (
    <div className="App">
      <h3>antd button</h3>
      <Button>try again</Button>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - default</h3>
      <FRCButton
        onClick={() => console.log('default')}
        style={{marginRight: 16}}
      >
        Targrt Button
      </FRCButton>
      <FRCButton
        onClick={() => console.log('default')}
        disabled
        style={{marginRight: 16}}
      >
        Targrt Button
      </FRCButton>
      <FRCButton
        onClick={() => console.log('default')}
        loading
        style={{marginRight: 16}}
      >
        Targrt Button
      </FRCButton>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - primary</h3>
      <FRCButton
        type="primary"
        onClick={() => console.log('primary')}
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        type="primary"
        onClick={() => console.log('primary')}
        disabled
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        work
        type="primary"
        onClick={() => console.log('primary')}
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        work
        workType="high-light"
        type="primary"
        onClick={() => console.log('primary')}
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        type="primary"
        onClick={() => console.log('primary')}
        loading
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        work
        type="primary"
        onClick={() => console.log('primary')}
        loading
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        work
        workType="high-light"
        type="primary"
        onClick={() => console.log('primary')}
        loading
        style={{marginRight: 16}}
      >
        Primary Button
      </FRCButton>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - lead</h3>
      <FRCButton
        type="lead"
        onClick={() => console.log('lead')}
        style={{marginRight: 16}}
      >
        Lead Button
      </FRCButton>
      <FRCButton
        type="lead"
        onClick={() => console.log('lead')}
        disabled
        style={{marginRight: 16}}
      >
        Lead Button
      </FRCButton>
      <FRCButton
        type="lead"
        onClick={() => console.log('lead')}
        loading
        style={{marginRight: 16}}
      >
        Lead Button
      </FRCButton>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

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
