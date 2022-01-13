import React, { FC, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { TimePicker, TimePickerProps } from 'antd'
import { IoCalendarOutline } from 'react-icons/io5'
import ReactDOM from 'react-dom'
import {
  BackwardOutlined,
  ForwardOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from '@ant-design/icons'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'

interface FRCTimePickerCustomProps {
  prefixIcon?: React.ReactNode
  showTime?: boolean
}

export type FRCTimePickerProps = TimePickerProps & FRCTimePickerCustomProps

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
  const currentDoms = document.querySelectorAll('.ant-picker-ok button')
  currentDoms && currentDoms.forEach(dom => {
    const btnClass = dom?.getAttribute('class') || ''
    if (btnClass.indexOf('frc-btn') === -1) {
      dom?.setAttribute('class', btnClass + ' frc-btn frc-btn-primary')
    }
  })
}

export const FRCTimePicker: FC<FRCTimePickerProps> = (
  props,
) => {
  const [dateValue, setDateValue] = useState('')
  const nodes = useRef(null)

  const {
    className,
    prefixIcon,
    popupClassName,
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
    [`frc-date-picker-suffix-icon`]: suffixIcon
  })

  const classesDropdown = classNames(
    'frc-date-picker-dropdown',
    popupClassName,
    {},
  )

  const options = {
    className: classes,
    prefixIcon,
    popupClassName: classesDropdown,
    showTime,
    suffixIcon,
    onChange: (value: any, dateString: string) => {
      onChange && onChange(value, dateString)
      setDateValue(dateString)
    },
    onOpenChange: (open: boolean) => {
      onOpenChange && onOpenChange(open)
      open && setTimeout(() => {
        insertFrcBtn()
      }, 0);
    },
    ...restProps,
  }

  // main
  return (
    <div ref={nodes} className="frc-date-picker-container">
      <TimePicker {...options} />
    </div>
  )
}

// normal
FRCTimePicker.defaultProps = {
  prefixIcon: <IoCalendarOutline />,
  suffixIcon: false,
  superPrevIcon: <BackwardOutlined />,
  superNextIcon: <ForwardOutlined />,
  prevIcon: <CaretLeftOutlined />,
  nextIcon: <CaretRightOutlined />,
  locale: locale,
}

export default FRCTimePicker
