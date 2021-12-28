import React, {FC} from 'react'
import classNames from 'classnames'
import Button, {ButtonProps} from 'antd/es/button'

export type ButtonWorkType = 'default' | 'hightLight'

interface BaseButtonProps {
  /** 启动激活 status */
  work?: boolean
  /** 激活 status type */
  workType?: ButtonWorkType
}

export const FRCButton: FC<ButtonProps & BaseButtonProps> = (props) => {
  const {
    className,
    size,
    type: btnType,
    children,
    href,
    danger,
    work,
    workType = 'default',
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-danger`]: danger,
    [`btn-${size}`]: size,
    [`btn-work-${workType}`]: work,
  })

  // main
  return (
    <Button
      className={classes}
      // disabled={disabled}
      danger={danger}
      {...restProps}
    >
      {children}
    </Button>
  )
}

// normal
Button.defaultProps = {
  disabled: false,
  type: 'primary',
}

export default FRCButton
