import React, {useState} from 'react'
import {Radio, Divider, Space} from 'antd'
import FRCRadio from '../components/Radio/index'

const RadioPage = () => {
  // radio group ------------------------------------------------
  const [normalGroupValue, setNormalGroupValue] = useState(1)
  const [verticalGroupValue, setVerticalGroupValue] = useState(1)
  const [solidGroupValue, setSolidGroupValue] = useState(1)

  const onNormalGroupChange = (e: any) => {
    setNormalGroupValue(e.target.value)
  }

  const onVerticalGroupChange = (e: any) => {
    setVerticalGroupValue(e.target.value)
  }

  const onSolidGroupChange = (e: any) => {
    setSolidGroupValue(e.target.value)
  }

  // ------------------------------------------------------------

  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd radio</h3>

      <Radio style={{backgroundColor: '#fff'}}>Radio</Radio>

      {/* <Radio.Group
        value={solidGroupValue}
        onChange={onSolidGroupChange}
        buttonStyle="outline"
        style={{backgroundColor: '#fff', padding: 30}}
      >
        <Radio.Button value={1}>Radio Btn1</Radio.Button>
        <Radio.Button value={2}>Radio Btn2</Radio.Button>
        <Radio.Button value={3}>Radio Btn3</Radio.Button>
        <Radio.Button value={4}>Radio Btn4</Radio.Button>
      </Radio.Group> */}

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default radio</h3>

      <FRCRadio style={{backgroundColor: '#1E2423'}}>Radio Btn</FRCRadio>

      <FRCRadio checked style={{backgroundColor: '#1E2423'}}>
        Radio Btn
      </FRCRadio>

      <FRCRadio disabled style={{backgroundColor: '#1E2423'}}>
        Radio Btn
      </FRCRadio>

      <FRCRadio checked disabled style={{backgroundColor: '#1E2423'}}>
        Radio Btn
      </FRCRadio>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>normal group radio</h3>

      <FRCRadio.Group value={normalGroupValue} onChange={onNormalGroupChange}>
        <FRCRadio value={1} style={{backgroundColor: '#1E2423'}}>
          Radio Btn1
        </FRCRadio>
        <FRCRadio value={2} style={{backgroundColor: '#1E2423'}}>
          Radio Btn2
        </FRCRadio>
        <FRCRadio value={3} style={{backgroundColor: '#1E2423'}}>
          Radio Btn3
        </FRCRadio>
        <FRCRadio value={4} style={{backgroundColor: '#1E2423'}}>
          Radio Btn4
        </FRCRadio>
      </FRCRadio.Group>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>vertical group radio</h3>

      <FRCRadio.Group
        value={verticalGroupValue}
        onChange={onVerticalGroupChange}
      >
        <Space direction="vertical">
          <FRCRadio value={1} style={{backgroundColor: '#1E2423'}}>
            Radio Btn1
          </FRCRadio>
          <FRCRadio value={2} style={{backgroundColor: '#1E2423'}}>
            Radio Btn2
          </FRCRadio>
          <FRCRadio value={3} style={{backgroundColor: '#1E2423'}}>
            Radio Btn3
          </FRCRadio>
          <FRCRadio value={4} style={{backgroundColor: '#1E2423'}}>
            Radio Btn4
          </FRCRadio>
        </Space>
      </FRCRadio.Group>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>solid tyle group radio</h3>

      <FRCRadio.Group value={solidGroupValue} onChange={onSolidGroupChange} buttonStyle="solid">
        <FRCRadio.Button value={1}>
          Radio Btn1
        </FRCRadio.Button>
        <FRCRadio.Button value={2}>
          Radio Btn2
        </FRCRadio.Button>
        <FRCRadio.Button value={3}>
          Radio Btn3
        </FRCRadio.Button>
        <FRCRadio.Button value={4}>
          Radio Btn4
        </FRCRadio.Button>
      </FRCRadio.Group>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default RadioPage
