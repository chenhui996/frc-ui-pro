import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Input, { PasswordProps, InputProps } from 'antd/es/input'

const { Password } = Input

interface BasePasswordProps {
  /** 自定义切换按钮	 */
  iconRender?: (visible: boolean) => React.ReactNode
  /** 是否显示切换按钮	 */
  visibilityToggle?: boolean
}

export type FRCPasswordProps = BasePasswordProps & PasswordProps & InputProps

export const FRCPassword: FC<FRCPasswordProps> = (props) => {

  const {
    className,
    ...restProps
  } = props

  const classes = classNames('frc-input frc-input-password', className, {
  })

  let options = {
    className: classes,
    ...restProps,
  }

  // main
  return <Password {...options} />
}

// normal
FRCPassword.defaultProps = {
  bordered: true,
  placeholder: "input password",
  visibilityToggle: true
}

export default FRCPassword
