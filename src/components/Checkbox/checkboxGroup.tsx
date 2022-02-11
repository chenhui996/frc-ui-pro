import React, { FC } from 'react'
import classNames from 'classnames'
import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/es/checkbox/Group'

const { Group } = Checkbox

interface BaseCheckboxGroupProps {
  /** 默认选中的选项 */
  defaultValue?: string[]
  /** 整组失效 */
  disabled?: boolean
  /** CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 */
  name?: string
  /** 指定可选项 */
  options?: string[] | number[] | Array<{ label: string; value: string | number }>
  /** 指定选中的选项 */
  value?: string[]
  /** 变化时回调函数 */
  onChange?: (value: string[]) => void
}

export type FrcCheckboxGroupProps = BaseCheckboxGroupProps & CheckboxGroupProps

export const FRCCheckboxGroup: FC<FrcCheckboxGroupProps> = (props) => {
  const { className, ...restProps } = props

  const classes = classNames('frc-checkbox-group', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Group {...options} />
}

// normal
FRCCheckboxGroup.defaultProps = {
  defaultValue: [],
  disabled: false,
  options: [],
}

export default FRCCheckboxGroup
