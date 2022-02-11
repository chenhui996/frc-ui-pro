import React, { FC, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { TimePicker, TimePickerProps } from 'antd'
import ReactDOM from 'react-dom'
import {
  BackwardOutlined,
  ForwardOutlined,
  ClockCircleOutlined,
  CaretRightOutlined,
  CaretLeftOutlined,
} from '@ant-design/icons'
import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'

const FORMAT_COLUMNS = ['HH:mm', 'HH', 'mm', 'ss', 'mm A', 'mm a'];

interface FRCTimePickerCustomProps {
  /** 前缀图标 */
  prefixIcon?: React.ReactNode
  /** 显示此刻 */
  showTime?: boolean
  /** 是否展示清除按钮 */
  allowClear?: boolean
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 选择器类名 */
  className?: string
  /** 自定义的清除图标 */
  clearIcon?: React.ReactNode
  /** 清除按钮的提示文案 */
  clearText?: string
  /** 默认时间 */
  defaultValue?: moment.Moment
  /** 禁用全部操作 */
  disabled?: boolean
  /** 禁止选择部分小时选项 */
  disabledHours?: () => void
  /** 禁止选择部分分钟选项 */
  disabledMinutes?: (selectedMinute: any) => void
  /** 禁止选择部分秒选项 */
  disabledSeconds?: (selectedHour: any, selectedMinute: any) => void
  /** 展示的时间格式 */
  format?: string
  /** 定义浮层的容器，默认为 body 上新建 div */
  getPopupContainer?: (trigger: any) => void
  /** 隐藏禁止选择的选项 */
  hideDisabledOptions?: boolean
  /** 小时选项间隔 */
  hourStep?: number
  /** 设置输入框为只读（避免在移动设备上打开虚拟键盘） */
  inputReadOnly?: boolean
  /** 分钟选项间隔 */
  minuteStep?: number
  /** 面板是否打开 */
  open?: boolean
  /** 没有值的时候显示的内容 */
  placeholder?: string | [string, string]
  /** 弹出层类名 */
  popupClassName?: string
  /** 弹出层样式对象 */
  popupStyle?: object
  /** 选择框底部显示自定义的内容 */
  renderExtraFooter?: () => React.ReactNode
  /** 秒选项间隔 */
  secondStep?: number
  /** 面板是否显示“此刻”按钮 */
  showNow?: boolean
  /** 自定义的选择框后缀图标 */
  suffixIcon?: React.ReactNode
  /** 使用 12 小时制，为 true 时 format 默认为 h:mm:ss a */
  use12Hours?: boolean
  /** 当前时间 */
  value?: moment.Moment
  /** 时间发生变化的回调 */
  onChange?: (time: moment.Moment, timeString: string) => void
  /** 面板打开/关闭时的回调 */
  onOpenChange?: (open: boolean) => void
  /** 移除焦点 */
  blur?: () => void
  /** 获取焦点 */
  focus?: () => void
}

export type FRCTimePickerProps = FRCTimePickerCustomProps & TimePickerProps

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
    format,
    onChange,
    onOpenChange,
    ...restProps
  } = props

  // add prefix node
  useEffect(() => {
    prefixIcon && addPrefixNode(nodes, prefixIcon)
  }, [prefixIcon])

  const classes = classNames('frc-date-picker frc-time-picker', className, {
    [`frc-date-picker-work`]: dateValue,
    [`frc-date-picker-suffix-icon`]: suffixIcon
  })

  const classesDropdown = classNames(
    'frc-date-picker-dropdown frc-time-picker-dropdown',
    popupClassName,
    {
      [`frc-time-picker-dropdown-now-float`]: FORMAT_COLUMNS.indexOf(format as any) !== -1,
    },
  )

  const options = {
    className: classes,
    prefixIcon,
    popupClassName: classesDropdown,
    showTime,
    suffixIcon,
    format,
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
  prefixIcon: <ClockCircleOutlined />,
  suffixIcon: false,
  superPrevIcon: <BackwardOutlined />,
  superNextIcon: <ForwardOutlined />,
  prevIcon: <CaretLeftOutlined />,
  nextIcon: <CaretRightOutlined />,
  locale: locale,
  allowClear: true,
  autoFocus: false,
  clearText: 'clear',
  disabled: false,
  format: 'HH:mm:ss',
  hideDisabledOptions: false,
  hourStep: 1,
  inputReadOnly: false,
  minuteStep: 1,
  open: false,
  placeholder: '请选择时间',
  secondStep: 1,
}

export default FRCTimePicker
