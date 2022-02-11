import React, { FC } from 'react'
import classNames from 'classnames'
import { Radio, RadioProps } from 'antd'
export interface BaseRadioProps {
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 禁用 Radio */
  disabled?: boolean;
  /** 根据 value 进行比较，判断是否选中 */
  value?: any;
  /** 移除焦点 */
  blur?: () => void;
  /** 获取焦点 */
  focus?: () => void;
}

export const FRCRadio: FC<BaseRadioProps & RadioProps> = (props) => {
  const { className, ...restProps } = props

  const classes = classNames('frc-radio', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Radio {...options} />
}

// normal
FRCRadio.defaultProps = {
  autoFocus: false,
  defaultChecked: false,
  disabled: false
}

export default FRCRadio
