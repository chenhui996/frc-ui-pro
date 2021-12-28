import React, {FC} from 'react'
import classNames from 'classnames'
import Button, {ButtonProps} from 'antd/es/button'

import {CaretRightOutlined} from '@ant-design/icons'

export type ButtonType = 'primary' | 'link' | 'lead'
export type ButtonWorkType = 'default' | 'high-light'

interface BaseButtonProps {
  /** 启动激活 status */
  work?: boolean
  /** 激活 status type */
  workType?: ButtonWorkType
  loading?: boolean
  type?: ButtonType
}

type FRCButtonProps = Omit<ButtonProps, 'type'> & BaseButtonProps

export const FRCButton: FC<FRCButtonProps> = (props) => {
  const {
    className,
    size,
    type,
    children,
    href,
    danger,
    work,
    workType = 'default',
    loading,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-danger`]: danger,
    [`btn-${size}`]: size,
    [`btn-work-${workType}`]: work,
    [`btn-loading`]: loading,
  })

  // main
  return (
    <Button
      className={classes}
      loading={loading}
      danger={danger}
      {...restProps}
    >
      <span className="lead-child-box">
        {children}
        {type === 'lead' && <CaretRightOutlined style={{marginLeft: 8}} />}
      </span>
    </Button>
  )
}

// normal
Button.defaultProps = {
  disabled: false,
  type: 'primary',
}

export default FRCButton
