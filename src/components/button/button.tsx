import React, {FC} from 'react'
import classNames from 'classnames'
import Button, {ButtonProps} from 'antd/es/button'

import {CaretRightOutlined} from '@ant-design/icons'

export type ButtonType = 'primary' | 'link' | 'lead' | 'gray'
export type ButtonWorkType = 'default' | 'high-light'

interface BaseButtonProps {
  /** 启动激活 status */
  work?: boolean
  /** 激活 status type */
  workType?: ButtonWorkType
  /** button type */
  type?: ButtonType
}

export type FRCButtonProps = Omit<ButtonProps, 'type' | 'danger'> & BaseButtonProps

export const FRCButton: FC<FRCButtonProps> = (props) => {
  const {
    className,
    size,
    type,
    children,
    href,
    work,
    workType = 'default',
    loading,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('frc-btn', className, {
    [`frc-btn-${type}`]: type,
    [`frc-btn-${size}`]: size,
    [`frc-btn-work-${workType}`]: work,
    [`frc-btn-loading`]: loading,
    [`frc-btn-icon-only`]: !children,
  })

  const options = {
    className: classes,
    loading,
    ...restProps,
  }

  // main
  return (
    <Button {...options}>
      <span className="lead-child-box">
        {children}
        {type === 'lead' && children && (
          <CaretRightOutlined style={{marginLeft: 8, fontSize: 10}} />
        )}
      </span>
    </Button>
  )
}

// normal
FRCButton.defaultProps = {
  disabled: false,
  // type: 'primary',
}

export default FRCButton
