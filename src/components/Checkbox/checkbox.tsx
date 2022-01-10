import React, {FC} from 'react'
import classNames from 'classnames'
import {Checkbox, CheckboxProps} from 'antd'

export const FRCCheckbox: FC<CheckboxProps> = (props) => {
  const {className, ...restProps} = props

  const classes = classNames('frc-checkbox', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Checkbox {...options} />
}

// normal
FRCCheckbox.defaultProps = {}

export default FRCCheckbox
