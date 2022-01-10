import React, {FC} from 'react'
import classNames from 'classnames'
import {Switch, SwitchProps} from 'antd'

export const FRCSwitch: FC<SwitchProps> = (props) => {
  const {className, ...restProps} = props

  const classes = classNames('frc-switch', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Switch {...options} />
}

// normal
FRCSwitch.defaultProps = {}

export default FRCSwitch
