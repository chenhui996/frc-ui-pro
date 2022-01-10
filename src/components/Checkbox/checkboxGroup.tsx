import React, {FC} from 'react'
import classNames from 'classnames'
import {Checkbox} from 'antd'
import {CheckboxGroupProps} from 'antd/es/checkbox/Group'

const {Group} = Checkbox

export const FRCCheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const {className, ...restProps} = props

  const classes = classNames('frc-checkbox-group', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Group {...options} />
}

// normal
FRCCheckboxGroup.defaultProps = {}

export default FRCCheckboxGroup
