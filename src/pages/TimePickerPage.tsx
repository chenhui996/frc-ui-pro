import React from 'react'
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

  function onChangeRange(dates: any, dateStrings: [string, string]) {
    console.log(dates, dateStrings);
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
        defaultValue={moment('00:27:36', 'HH:mm:ss')}
        onChange={onChange}
      />

      <TimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('00:27:36', 'HH:mm:ss')}
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

      <h3>frc timePicker</h3>

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
      />

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('00:27:36', 'HH:mm:ss')}
        onChange={onChange}
      />

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('00:27:36', 'HH:mm:ss')}
        onChange={onChange}
        disabled
      />

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('12:08', formatMinutes)}
        format={formatMinutes}
        onChange={onChange}
      />

      <FRCTimePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={moment('12:08', formatSeconds)}
        format={formatSeconds}
        onChange={onChange}
      />

      <FRCTimePicker
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

      <FRCTimePicker use12Hours onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />
      <FRCTimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />
      <FRCTimePicker use12Hours format="mm A" onChange={onChange} style={{ marginRight: 16, marginBottom: 16 }} />

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />

      <h3>frc timePicker - range</h3>

      <FRCTimePicker.RangePicker style={{ marginRight: 16, marginBottom: 16 }} />

      <FRCTimePicker.RangePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={[moment('12:08', formatSeconds), moment('13:08', formatSeconds)]}
        onChange={onChangeRange}
      />

      <FRCTimePicker.RangePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={[moment('12:08', formatSeconds), moment('13:08', formatSeconds)]}
        onChange={onChangeRange}
        disabled
      />

      <FRCTimePicker.RangePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={[moment('12:08', formatSeconds), moment('13:08', formatSeconds)]}
        format={formatMinutes}
        onChange={onChangeRange}
      />

      <FRCTimePicker.RangePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={[moment('12:08', formatSeconds), moment('13:08', formatSeconds)]}
        format={formatSeconds}
        onChange={onChangeRange}
      />

      <FRCTimePicker.RangePicker
        style={{ marginRight: 16, marginBottom: 16 }}
        locale={locale}
        defaultValue={[moment('12:08', formatSeconds), moment('13:08', formatSeconds)]}
        onChange={onChangeRange}
        renderExtraFooter={() => (
          <Button size="small" type="primary">
            OK
          </Button>
        )}
      />

      <FRCTimePicker.RangePicker use12Hours onChange={onChangeRange} style={{ marginRight: 16, marginBottom: 16 }} />
      <FRCTimePicker.RangePicker use12Hours format="h:mm:ss A" onChange={onChangeRange} style={{ marginRight: 16, marginBottom: 16 }} />
      <FRCTimePicker.RangePicker use12Hours format="mm A" onChange={onChangeRange} style={{ marginRight: 16, marginBottom: 16 }} />

      <Divider style={{ backgroundColor: '#1e1e1e', height: 1, marginTop: 16 }} />
    </>
  )
}

export default CheckboxPage
