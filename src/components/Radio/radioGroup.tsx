import React, { FC } from 'react'
import classNames from 'classnames'
import { Radio, RadioGroupProps } from 'antd'

const { Group } = Radio
export interface BaseRadioGroupProps {
  /** RadioButton 的风格样式，目前有描边和填色两种风格 */
  buttonStyle?: 'solid';
  /** 默认选中的值 */
  defaultValue?: any;
  /** 禁选所有子单选器 */
  disabled?: boolean;
  /** RadioGroup 下所有 input[type="radio"] 的 name 属性 */
  name?: string;
  /** 以配置形式设置子元素 */
  options?: string[] | number[] | Array<{ label: string, value: string, disabled?: boolean }>;
  /** 用于设置 Radio options 类型 */
  optionType?: 'default' | 'button'
  /** 用于设置当前选中的值 */
  value?: any;
  /** 选项变化时的回调函数 */
  onChange?: (e: Event) => void;
}

export type FRCRadioGroupProps = BaseRadioGroupProps & RadioGroupProps

export const FRCRadioGroup: FC<FRCRadioGroupProps> = (props) => {
  const { className, children, ...restProps } = props

  const classes = classNames('frc-radio-group', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Group {...options}>{children}</Group>
}

// normal
FRCRadioGroup.defaultProps = {
  disabled: false,
  optionType: 'default'
}

export default FRCRadioGroup
