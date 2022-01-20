import React, { FC } from 'react'
import classNames from 'classnames'
import { Checkbox, CheckboxProps } from 'antd'

export interface BaseCheckboxProps {
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 指定当前是否选中 */
  checked?: boolean
  /** 初始是否选中 */
  defaultChecked?: boolean
  /** 失效状态 */
  disabled?: boolean
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate?: boolean
  /** 变化时回调函数 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type FrcCheckboxProps = BaseCheckboxProps & CheckboxProps

export const FRCCheckbox: FC<FrcCheckboxProps> = (props) => {
  const { className, ...restProps } = props

  const classes = classNames('frc-checkbox', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Checkbox {...options} />
}

// normal
FRCCheckbox.defaultProps = {
  autoFocus: false,
  defaultChecked: false,
  disabled: false,
  indeterminate: false,
}

export default FRCCheckbox
