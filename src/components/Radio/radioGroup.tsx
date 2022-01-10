import React, {FC} from 'react'
import classNames from 'classnames'
import {Radio, RadioGroupProps} from 'antd'

const {Group} = Radio

export const FRCRadioGroup: FC<RadioGroupProps> = (props) => {
  const {className,children, ...restProps} = props

  const classes = classNames('frc-radio-group', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Group {...options}>{children}</Group>
}

// normal
FRCRadioGroup.defaultProps = {}

export default FRCRadioGroup
