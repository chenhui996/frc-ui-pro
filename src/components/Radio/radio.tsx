import React, {FC} from 'react'
import classNames from 'classnames'
import {Radio, RadioProps} from 'antd'

export const FRCRadio: FC<RadioProps> = (props) => {
  const {className, ...restProps} = props

  const classes = classNames('frc-radio', className, {})

  const options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Radio {...options} />
}

// normal
FRCRadio.defaultProps = {}

export default FRCRadio
