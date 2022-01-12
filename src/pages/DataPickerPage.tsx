import React, {useState} from 'react'
import {DatePicker, Divider} from 'antd'
import FRCDatePicker from '../components/DatePicker/index'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import {FiSlack} from 'react-icons/fi'

const {RangePicker} = DatePicker

// import {FiSearch} from 'react-icons/fi'

const CheckboxPage = () => {
  const dateFormat = 'YYYY/MM/DD'
  function onChange(date: any, dateString: string) {
    console.log(date, dateString)
  }

  const [dates, setDates] = useState<any>([])
  const [hackValue, setHackValue] = useState<any>()
  const [value, setValue] = useState<any>()

  const disabledDate = (current: any) => {
    if (!dates || dates.length === 0) {
      return false
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7
    return tooEarly || tooLate
  }

  const onOpenChange = (open: any) => {
    if (open) {
      setHackValue([])
      setDates([])
    } else {
      setHackValue(undefined)
    }
  }

  const restCustomDateRender = (current: any) => {
    // if (current.date() === 5) {
    const REST_COLUMNS = ['01/05', '01/06']
    const EXPLAIN_COLUMNS = [
      {
        date: '01/12',
        explain: '3.32',
      },
      {
        date: '01/13',
        explain: '3.33',
      },
      {
        date: '01/14',
        explain: '3.34',
      },
    ]

    const dateArr = EXPLAIN_COLUMNS.map((item) => item.date)

    if (REST_COLUMNS.indexOf(current.format('MM/DD')) !== -1) {
      return (
        <div className="ant-picker-cell-inner">
          <span style={{fontWeight: 500}}>休</span>
        </div>
      )
    } else if (dateArr.indexOf(current.format('MM/DD')) !== -1) {
      const index = dateArr.indexOf(current.format('MM/DD'))
      return (
        <div className="ant-picker-cell-inner">
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{transform: 'translateY(-4px)'}}>
              {current.date()}
            </span>
            <span
              style={{
                transform: 'scale(0.5) translateY(-35px)',
                color: '#F9C152',
                fontWeight: 500,
              }}
            >
              {EXPLAIN_COLUMNS[index].explain}
            </span>
          </span>
        </div>
      )
    } else {
      return <div className="ant-picker-cell-inner">{current.date()}</div>
    }
  }

  return (
    <>
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>antd datePicker</h3>
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
      />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        picker="week"
      />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        picker="month"
      />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        picker="quarter"
      />
      <DatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        picker="year"
      />
      <RangePicker showTime />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>default datePciker</h3>
      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
      />
      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={moment('2015/01/01', dateFormat)}
        dropdownClassName="test-dropdown"
        className="test-picker"
        locale={locale}
      />
      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        disabled
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={moment('2015/01/01', dateFormat)}
        disabled
        suffixIcon={<FiSlack />}
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>showNow datePciker</h3>
      <FRCDatePicker
        placeholder="Show now datePciker"
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        showToday
        // showTime
        // suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        placeholder="showTime dataPicker"
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        showToday
        showTime
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        placeholder="format showTime"
        onChange={onChange}
        style={{marginRight: 16, marginBottom: 16}}
        showToday
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        suffixIcon={<FiSlack />}
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>rangePicker - date picker</h3>
      <FRCDatePicker.RangePicker style={{marginRight: 16, marginBottom: 16}} />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        suffixIcon={<FiSlack />}
        showTime
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
        suffixIcon={<FiSlack />}
        showTime
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        suffixIcon={<FiSlack />}
        showTime
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        defaultValue={[
          moment('2015/01/01', dateFormat),
          moment('2015/01/10', dateFormat),
        ]}
        suffixIcon={<FiSlack />}
        showTime
        disabled
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>week - date picker | range picker</h3>
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="week"
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="week"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="week"
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="week"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="week"
        disabled
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="week"
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="week"
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="week"
        suffixIcon={<FiSlack />}
        disabled
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>month - date picker | range picker</h3>
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="month"
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="month"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="month"
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="month"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="month"
        disabled
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="month"
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="month"
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="month"
        suffixIcon={<FiSlack />}
        disabled
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>quarter - date picker | range picker</h3>
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="quarter"
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="quarter"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="quarter"
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="quarter"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="quarter"
        disabled
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="quarter"
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="quarter"
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="quarter"
        suffixIcon={<FiSlack />}
        disabled
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
      <h3>year - date picker | range picker</h3>
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="year"
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="year"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="year"
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="year"
        suffixIcon={<FiSlack />}
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="year"
        disabled
      />
      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        onChange={onChange}
        picker="year"
        suffixIcon={<FiSlack />}
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="year"
        disabled
      />
      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        picker="year"
        suffixIcon={<FiSlack />}
        disabled
      />
      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>7 day - range picker</h3>

      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        value={hackValue || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
      />

      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        value={hackValue || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
        disabled
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>extra footer - date picker | range picker</h3>

      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        renderExtraFooter={() => 'extra footer'}
      />

      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        renderExtraFooter={() => 'extra footer'}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />

      <h3>custom date - date picker | range picker</h3>

      <FRCDatePicker
        style={{marginRight: 16, marginBottom: 16}}
        renderExtraFooter={() => 'extra footer'}
        dateRender={restCustomDateRender}
      />

      <FRCDatePicker.RangePicker
        style={{marginRight: 16, marginBottom: 16}}
        renderExtraFooter={() => 'extra footer'}
        dateRender={restCustomDateRender}
      />

      <Divider style={{backgroundColor: '#1e1e1e', height: 1, marginTop: 16}} />
    </>
  )
}

export default CheckboxPage
