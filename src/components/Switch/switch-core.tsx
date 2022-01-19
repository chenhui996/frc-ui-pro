import React, { FC } from 'react'
import classNames from 'classnames'
import { Switch as AntdSwitch, SwitchProps } from 'antd'

export const Switch: FC<SwitchProps> = (props) => {
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
Switch.defaultProps = {}

export default Switch
