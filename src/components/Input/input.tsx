import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from 'antd/es/input'
import { FiSearch } from 'react-icons/fi'

type InputType = 'default' | 'icon-only'
interface BaseInputProps {
  /** 交互类型 */
  type?: InputType
  /** 带标签的 input，设置后置标签 */
  addonAfter?: React.ReactNode
  /** 带标签的 input，设置前置标签 */
  addonBefore?: React.ReactNode
  /** 可以点击清除图标删除内容 */
  allowClear?: boolean
  /** 是否有边框 */
  bordered?: boolean
  /** 输入框默认内容 */
  defaultValue?: string
  /** 是否禁用状态，默认为 false */
  disabled?: boolean
  /** 输入框的 id */
  id?: string
  /** 最大长度 */
  maxLength?: number
  /** 是否展示字数 */
  showCount?: boolean | { formatter: (props: { count: number, maxLength?: number }) => React.ReactNode }
  /** 带有前缀图标的 input */
  prefix?: React.ReactNode
  /** 带有后缀图标的 input */
  suffix?: React.ReactNode
  /** 输入框内容 */
  value?: string
  /** 输入框内容变化时的回调 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** 按下回车的回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** 取消焦点 */
  blur?: () => void
  /** 获取焦点 */
  focus?: (option?: { preventScroll?: boolean, cursor?: 'start' | 'end' | 'all' }) => void
}

export type FRCInputProps = BaseInputProps & Omit<InputProps, 'type'>

export const FRCInput: FC<FRCInputProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)

  const {
    className,
    bordered,
    prefix,
    type,
    value,
    onChange,
    onKeyDown,
    ...restProps
  } = props

  const classes = classNames('frc-input', className, {
    [`frc-input-no-border`]: !bordered,
    [`frc-input-enter`]: keyDownEnter,
    [`frc-input-prefix`]: prefix,
    [`frc-input-${type}`]: type,
  })

  let options = {
    className: classes,
    ...restProps,
    bordered,
    prefix: !prefix && type === 'icon-only' ? <FiSearch /> : prefix,
    type,
    value,
    onKeyDown: (e: any) => {
      onKeyDown && onKeyDown(e)
      if (e.code === 'Enter') {
        setKeyDownEnter(true)
      }
    },
    onChange: (e: any) => {
      onChange && onChange(e)
      if (!e.target.value && e.target.value !== 0) {
        setKeyDownEnter(false)
      }
    },
  }

  // main
  return <Input {...options} />
}

// normal
FRCInput.defaultProps = {
  bordered: true,
  placeholder: '请输入...',
  type: 'default',
  disabled: false,
  showCount: false,
}

export default FRCInput
