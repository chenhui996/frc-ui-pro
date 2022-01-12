import React, {FC, useRef, useEffect, useState} from 'react'
import classNames from 'classnames'
import {DatePicker} from 'antd'
import {RangePickerProps} from 'antd/es/date-picker/index'
import {IoCalendarOutline} from 'react-icons/io5'
import ReactDOM from 'react-dom'
import {
  BackwardOutlined,
  ForwardOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'

const {RangePicker} = DatePicker

interface FRCRangePickerCustomProps {
  prefixIcon?: React.ReactNode
  showTime?: boolean
}

export type FRCRangePickerProps = RangePickerProps & FRCRangePickerCustomProps

const addPrefixNode = (nodes: any, prefixIcon: React.ReactNode) => {
  const addNode = document.createElement('div')
  addNode.setAttribute('class', 'frc-date-picker-prefix')

  // dom container insert
  const currentDom = nodes.current
  const parentNode = currentDom.querySelector('.ant-picker-input')

  // -------------------------------------------------------------------

  if (parentNode) {
    parentNode.insertBefore(addNode, currentDom.querySelector('input'))
    // icon insert
    ReactDOM.render(
      prefixIcon as any,
      currentDom.querySelector('.frc-date-picker-prefix'),
    )
  }
}

const insertFrcBtn = () => {
  const btn = document.querySelector('.ant-picker-ok button')
  const btnClass = btn?.getAttribute('class') || ''
  btn?.setAttribute('class', btnClass + ' frc-btn frc-btn-primary')
}

export const FRCRangePicker: FC<FRCRangePickerProps> = (props) => {
  const [dateValue, setDateValue] = useState(['', ''])
  const nodes = useRef(null)

  const {
    className,
    prefixIcon,
    dropdownClassName,
    showTime,
    suffixIcon,
    onChange,
    onOpenChange,
    ...restProps
  } = props

  // add prefix node
  useEffect(() => {
    prefixIcon && addPrefixNode(nodes, prefixIcon)
  }, [prefixIcon])

  const classes = classNames('frc-date-picker', className, {
    [`frc-date-picker-work`]: dateValue,
    [`frc-date-picker-suffix-icon`]: suffixIcon,
  })

  const classesDropdown = classNames(
    'frc-date-picker-dropdown',
    dropdownClassName,
    {},
  )

  const options = {
    className: classes,
    prefixIcon,
    dropdownClassName: classesDropdown,
    showTime,
    suffixIcon,
    onChange: (dates: any, dateStrings: [string, string]) => {
      onChange && onChange(dates, dateStrings)
      setDateValue(dateStrings)
    },
    onOpenChange: (open: boolean) => {
      onOpenChange && onOpenChange(open)
      open &&
        showTime &&
        setTimeout(() => {
          insertFrcBtn()
        }, 0)
    },
    ...restProps,
  }

  // main
  return (
    <div ref={nodes} className="frc-date-picker-container">
      <RangePicker {...options} />
    </div>
  )
}

// normal
FRCRangePicker.defaultProps = {
  prefixIcon: <IoCalendarOutline />,
  suffixIcon: false,
  // showToday: false,
  superPrevIcon: <BackwardOutlined />,
  superNextIcon: <ForwardOutlined />,
  prevIcon: <CaretLeftOutlined />,
  nextIcon: <CaretRightOutlined />,
  locale: locale,
  separator: <span style={{fontSize: 14}}>～</span>,
}

export default FRCRangePicker
