import React from 'react'
import {Radio, Divider} from 'antd'
import FRCRadio from '../components/Radio/index'

const RadioPage = () => {
  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd radio</h3>

      <Radio style={{backgroundColor: '#fff'}}>Radio</Radio>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default radio</h3>

      <FRCRadio style={{backgroundColor: '#1E2423'}}>Radio Btn</FRCRadio>

      <FRCRadio checked style={{backgroundColor: '#1E2423'}}>Radio Btn</FRCRadio>

      <FRCRadio disabled style={{backgroundColor: '#1E2423'}}>
        Radio Btn
      </FRCRadio>

      <FRCRadio checked disabled style={{backgroundColor: '#1E2423'}}>
        Radio Btn
      </FRCRadio>

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default RadioPage
