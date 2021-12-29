import React from 'react'
import {Button, Divider} from 'antd'
import FRCButton from './components/button/index'
import {QuestionCircleOutlined, ProfileOutlined} from '@ant-design/icons'

function App() {
  return (
    <div className="App">
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

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
      <FRCButton
        type="lead"
        onClick={() => console.log('lead')}
        loading
        style={{marginRight: 16, width: 300}}
      >
        Lead Button
      </FRCButton>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - icon</h3>
      <FRCButton
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      >
        Targrt Button
      </FRCButton>
      <FRCButton
        type="primary"
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        type="lead"
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<ProfileOutlined />}
      >
        Lead Button
      </FRCButton>
      <FRCButton
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
        disabled
      >
        Primary Button
      </FRCButton>
      <FRCButton
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
        loading
      >
        Primary Button
      </FRCButton>
      <FRCButton
        type="primary"
        work
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      >
        Primary Button
      </FRCButton>
      <FRCButton
        type="primary"
        work
        workType="high-light"
        onClick={() => console.log('icon')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      >
        Primary Button
      </FRCButton>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - icon-only</h3>
      <FRCButton
        type="lead"
        onClick={() => console.log('icon-only')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      />
      <FRCButton
        onClick={() => console.log('icon-only')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
        disabled
      />
      <FRCButton
        work
        workType="high-light"
        type="primary"
        onClick={() => console.log('icon-only')}
        style={{marginRight: 16}}
        icon={<QuestionCircleOutlined />}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - gray</h3>
      <FRCButton
        type="gray"
        onClick={() => console.log('gray')}
        style={{marginRight: 16}}
      >
        Targrt Button
      </FRCButton>
      <FRCButton
        type="gray"
        onClick={() => console.log('gray')}
        style={{marginRight: 16}}
        disabled
      >
        Targrt Button
      </FRCButton>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>button - link</h3>
      <FRCButton
        type="link"
        onClick={() => console.log('link')}
        style={{marginRight: 16}}
      >
        Targrt Button
      </FRCButton>
      <FRCButton
        type="link"
        onClick={() => console.log('link')}
        style={{marginRight: 16}}
        disabled
      >
        Targrt Button
      </FRCButton>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </div>
  )
}

export default App
