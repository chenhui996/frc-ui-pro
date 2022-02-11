import React, { FC, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { DatePicker, DatePickerProps, TimePickerProps } from 'antd'
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

export interface BasePickerProps {
  /** 是否显示清除按钮 */
  allowClear?: boolean
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 选择器 className */
  className?: string
  /** 自定义日期单元格的内容 */
  dateRender?: (currentDate: moment.Moment, today: moment.Moment) => React.ReactNode
  // /** 禁用 */
  // disabled?: boolean
  /** 不可选择的日期 */
  disabledDate?: (currentDate: moment.Moment) => boolean
  /** 额外的弹出日历 className */
  dropdownClassName?: string
  /** 定义浮层的容器，默认为 body 上新建 div */
  getPopupContainer?: (trigger: HTMLElement) => HTMLElement
  /** 设置输入框为只读（避免在移动设备上打开虚拟键盘） */
  inputReadOnly?: boolean
  /** 国际化配置 */
  locale?: object
  /** 日期面板的状态 */
  mode?: 'time' | 'date' | 'month' | 'year' | 'decade'
  /** 自定义下一个图标 */
  nextIcon?: React.ReactNode
  /** 控制弹层是否展开	 */
  open?: boolean
  /** 自定义渲染面板 */
  panelRender?: (panelNode: React.ReactNode) => React.ReactNode
  /** 设置选择器类型 */
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'
  /** 输入框提示文字 */
  placeholder?: string | [string, string]
  /** 额外的弹出日历样式 */
  popupStyle?: React.CSSProperties
  /** 自定义上一个图标 */
  prevIcon?: React.ReactNode
  /** 自定义输入框样式 */
  style?: React.CSSProperties
  /** 自定义的选择框后缀图标	 */
  suffixIcon?: React.ReactNode
  /** 自定义前缀图标 */
  prefixIcon?: React.ReactNode
  /** 自定义 >> 切换图标 */
  superNextIcon?: React.ReactNode
  /** 自定义 << 切换图标 */
  superPrevIcon?: React.ReactNode
  /** 弹出日历和关闭日历的回调	 */
  onOpenChange?: (open: boolean) => void
  /** 日历面板切换的回调 */
  onPanelChange?: (date: moment.Moment, mode: string) => void
  /** 移除焦点	 */
  blur?: () => void
  /** 	获取焦点 */
  focus?: () => void
}

interface FRCDatePickerCustomProps {
  /** 默认面板日期 */
  defaultPickerValue?: moment.Moment
  /** 默认日期，如果开始时间或结束时间为 null 或者 undefined，日期范围将是一个开区间 */
  defaultValue?: moment.Moment
  /** 禁用 */
  disabled?: boolean
  /** 不可选择的时间 */
  disabledTime?: (current: moment.Moment) => object
  /** 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js，支持自定义格式 */
  format?: string | ((value: moment.Moment) => string) | (string | ((value: moment.Moment) => string))[]
  /** 在面板中添加额外的页脚 */
  renderExtraFooter?: (mode: any) => React.ReactNode
  /** 当设定了 showTime 的时候，面板是否显示“此刻”按钮 */
  showNow?: boolean
  /** 增加时间选择功能 */
  showTime?: Object | boolean
  /** 是否展示“今天”按钮 */
  showToday?: boolean
  /** 日期 */
  value?: moment.Moment
  /** 时间发生变化的回调	 */
  onChange?: (date: moment.Moment, dateString: string) => void
  /** 点击确定按钮的回调 */
  onOk?: () => void
  /** 日期面板变化时的回调 */
  onPanelChange?: (value: moment.Moment, mode: string) => void
}

export type FRCDatePickerProps = BasePickerProps & FRCDatePickerCustomProps & DatePickerProps

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

export const FRCDatePicker: FC<FRCDatePickerProps> = (
  props,
) => {
  const [dateValue, setDateValue] = useState('')
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
    [`frc-date-picker-suffix-icon`]: suffixIcon
  })

  const classesDropdown = classNames(
    'frc-date-picker-dropdown',
    dropdownClassName,
    {
    },
  )

  const options = {
    className: classes,
    prefixIcon,
    dropdownClassName: classesDropdown,
    showTime,
    suffixIcon,
    onChange: (value: any, dateString: string) => {
      onChange && onChange(value, dateString)
      setDateValue(dateString)
    },
    onOpenChange: (open: boolean) => {
      onOpenChange && onOpenChange(open)
      open && showTime && setTimeout(() => {
        insertFrcBtn()
      }, 0);
    },
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
  showToday: false,
  superPrevIcon: <BackwardOutlined />,
  superNextIcon: <ForwardOutlined />,
  prevIcon: <CaretLeftOutlined />,
  nextIcon: <CaretRightOutlined />,
  locale: locale,
  //default
  allowClear: true,
  autoFocus: false,
  disabled: false,
  inputReadOnly: false,
  picker: 'date',
  popupStyle: {},
  style: {},
}

export default FRCDatePicker
