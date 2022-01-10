import React from 'react'
import {DatePicker, Divider} from 'antd'
import FRCDatePicker from '../components/DatePicker/index'
// import {FiSearch} from 'react-icons/fi'

const CheckboxPage = () => {
  function onChange(date: any, dateString: string) {
    console.log(date, dateString)
  }
  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>antd datePicker</h3>

      <DatePicker onChange={onChange} style={{marginRight: 16}} />
      <DatePicker onChange={onChange} style={{marginRight: 16}} picker="week" />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16}}
        picker="month"
      />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16}}
        picker="quarter"
      />
      <DatePicker onChange={onChange} style={{marginRight: 16}} picker="year" />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>default datePciker</h3>

      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16}}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default CheckboxPage
