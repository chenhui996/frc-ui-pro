import React from 'react'
import {Input, Divider} from 'antd'
import FRCInput from '../components/input/index'
// import {QuestionCircleOutlined, ProfileOutlined} from '@ant-design/icons'
import {SearchOutlined} from '@ant-design/icons'

const ButtonPage = () => {
  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd input</h3>
      <Input allowClear style={{marginRight: 16, width: 240}} />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default input</h3>
      <FRCInput placeholder="Enter" style={{marginRight: 16}} />

      <FRCInput placeholder="Disable" disabled style={{marginRight: 16}} />

      <FRCInput
        prefix={<SearchOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        bordered={false}
      />

      <FRCInput
        prefix={<SearchOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        bordered={false}
        disabled
      />

      <FRCInput
        prefix={<SearchOutlined />}
        suffix={<SearchOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
      />

      <FRCInput
        placeholder="Enter"
        style={{marginRight: 16, width: 240}}
        allowClear
      />

      <FRCInput
        prefix={<SearchOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>icon-only input</h3>

      <FRCInput
        type="icon-only"
        prefix={<SearchOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      {/* <h3>search input</h3>

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        // loading
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} /> */}
    </>
  )
}

export default ButtonPage
