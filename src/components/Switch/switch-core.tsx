// 文件名为 switch，提示报错，故改为 switch-core
import React, { FC } from 'react'
import classNames from 'classnames'
import { Switch as AntdSwitch, SwitchProps } from 'antd'

interface BaseSwitch {
  /** 组件自动获取焦点 */
  autoFocus?: boolean
  /** 指定当前是否选中 */
  checked?: boolean
  /** 选中时的内容 */
  checkedChildren?: React.ReactNode
  /** Switch 器类名 */
  className?: string
  /** 初始是否选中 */
  defaultChecked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 加载中的开关 */
  loading?: boolean
  /** 非选中时的内容 */
  unCheckedChildren?: React.ReactNode
  /** 变化时回调函数 */
  onChange?: (checked: boolean, event: Event) => void
  /** 点击时回调函数 */
  onClick?: (checked: boolean, event: Event) => void
  /** 移除焦点 */
  blur?: () => void
  /** 获取焦点 */
  focus?: () => void
}

export type FRCSwitchProps = BaseSwitch & SwitchProps

export const Switch: FC<FRCSwitchProps> = (props) => {
  const { className, ...restProps } = props

  const classes = classNames('frc-switch', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <AntdSwitch {...options} />
}

// normal
Switch.defaultProps = {
  autoFocus: false,
  defaultChecked: false,
  disabled: false,
  loading: false,
}

export default Switch
