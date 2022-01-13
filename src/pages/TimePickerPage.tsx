import React, { useState } from 'react'
import { TimePicker, Divider, Button } from 'antd'
import FRCTimePicker from '../components/TimePicker/index'
import moment, { Moment } from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'

const CheckboxPage = () => {
  const formatMinutes = 'HH:mm';
  const formatSeconds = 'mm';
  function onChange(time: Moment | null, timeString: string) {
    console.log(time, timeString);
  }

  return (
    <>
      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
      <h3>antd timePicker</h3>
      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultOpenValue={moment('00:27:36', 'HH:mm:ss')}
        onChange={onChange}
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultOpenValue={moment('00:27:36', 'HH:mm:ss')}
        onChange={onChange}
        disabled
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('12:08', formatMinutes)} format={formatMinutes}
        onChange={onChange}
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('12:08', formatSeconds)} format={formatSeconds}
        onChange={onChange}
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('12:08', formatSeconds)} format={formatSeconds}
        onChange={onChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary">
            OK
          </Button>
        )}
      />

      <TimePicker use12Hours onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />
      <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />
      <TimePicker use12Hours format="h:mm a" onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />

      <TimePicker.RangePicker />

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

      <h3>antd timePicker</h3>

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
      />

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
    </>
  )
}

export default CheckboxPage
