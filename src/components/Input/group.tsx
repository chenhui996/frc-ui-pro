import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Input, { GroupProps, InputProps } from 'antd/es/input'

const { Group } = Input

interface BaseGroupProps {
  /** 是否用紧凑模式	 */
  compact?: boolean
}

export type FRCGroupProps = BaseGroupProps & GroupProps & InputProps

export const FRCGroup: FC<FRCGroupProps> = (props) => {

  const {
    className,
    ...restProps
  } = props

  const classes = classNames('frc-input frc-input-group', className, {
  })

  let options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Group {...options} />
}

// normal
FRCGroup.defaultProps = {
  compact: false,
}

export default FRCGroup
