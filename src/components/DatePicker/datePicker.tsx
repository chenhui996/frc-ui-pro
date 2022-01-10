import React, {FC, useRef, useEffect} from 'react'
import classNames from 'classnames'
import {DatePicker, DatePickerProps} from 'antd'
import {IoCalendarOutline} from 'react-icons/io5'
import ReactDOM from 'react-dom'

export interface FRCDatePickerProps {
  prefixIcon?: React.ReactNode
}

const addPrefixNode = (nodes: any, prefixIcon: React.ReactNode) => {
  const addNode = document.createElement('div')
  addNode.setAttribute('class', 'frc-date-picker-prefix')

  // dom container insert
  const currentDom = nodes.current
  currentDom &&
    currentDom
      .querySelector('.ant-picker-input')
      .insertBefore(addNode, currentDom.querySelector('input'))

  // icon insert
  ReactDOM.render(
    prefixIcon as any,
    currentDom.querySelector('.frc-date-picker-prefix'),
  )
}

export const FRCDatePicker: FC<DatePickerProps & FRCDatePickerProps> = (
  props,
) => {
  const nodes = useRef(null)

  const {className, prefixIcon, ...restProps} = props

  // add prefix node
  useEffect(() => {
    if (prefixIcon) {
      addPrefixNode(nodes, prefixIcon)
    }
  }, [prefixIcon])

  const classes = classNames('frc-date-picker', className, {})

  const options = {
    className: classes,
    prefixIcon,
    ...restProps,
  }

  // main
  return (
    <div ref={nodes} className="frc-date-picker-container">
      <DatePicker {...options} />
    </div>
  )
}

// normal
FRCDatePicker.defaultProps = {
  prefixIcon: <IoCalendarOutline />,
  suffixIcon: false,
}

export default FRCDatePicker
