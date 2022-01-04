import React from 'react'
import {Input, Divider} from 'antd'
import FRCInput from '../components/Input/index'
// import {QuestionCircleOutlined, ProfileOutlined} from '@ant-design/icons'
import {MenuFoldOutlined} from '@ant-design/icons'
import {FiSearch} from 'react-icons/fi'

const ButtonPage = () => {
  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd input</h3>
      <Input allowClear style={{marginRight: 16, width: 240}} />
      <Input.Search
        allowClear
        style={{marginRight: 16, width: 240}}
        enterButton={<FiSearch />}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default input</h3>
      <FRCInput placeholder="Enter" style={{marginRight: 16}} />

      <FRCInput placeholder="Disable" disabled style={{marginRight: 16}} />

      <FRCInput
        prefix={<FiSearch />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        bordered={false}
      />

      <FRCInput
        prefix={<FiSearch />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        bordered={false}
        disabled
      />

      <FRCInput
        prefix={<FiSearch />}
        suffix={<MenuFoldOutlined />}
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
        prefix={<FiSearch />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>icon-only input</h3>

      <FRCInput
        type="icon-only"
        // prefix={<MenuFoldOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
      />

      <FRCInput
        type="icon-only"
        // prefix={<MenuFoldOutlined />}
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>search input</h3>

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        // loading
        onSearch={() => {
          console.log('search')
        }}
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        onSearch={() => {
          console.log('search')
        }}
        disabled
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        loading
        onSearch={() => {
          console.log('search')
        }}
        disabled
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        loading
        onSearch={() => {
          console.log('search')
        }}
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16}}
        allowClear
        // loading
        onSearch={() => {
          console.log('search')
        }}
        enterButton="Search"
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16, width: 240}}
        allowClear
        loading
        onSearch={() => {
          console.log('search')
        }}
        enterButton="Search"
      />

      <FRCInput.Search
        placeholder="Enter"
        style={{marginRight: 16, width: 240}}
        allowClear
        // loading
        onSearch={() => {
          console.log('search')
        }}
        enterButton="Search"
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default ButtonPage
