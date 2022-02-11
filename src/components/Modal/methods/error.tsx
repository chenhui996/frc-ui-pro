import { FC } from 'react'
import classNames from 'classnames'
import Modal, { ModalFuncProps } from 'antd/es/modal'

import { FRCMethodProps } from './confirm'

export const Error: FC<FRCMethodProps> = (props) => {
  const {
    className,
    cancelButtonProps,
    okButtonProps,
    keyboard,
    ...restProps
  } = props
  const classes = classNames('frc-modal', className, {
  })

  const cancelBtnClasses = classNames('frc-btn', cancelButtonProps?.className, {})

  const okBtnClasses = classNames('frc-btn frc-btn-primary', okButtonProps?.className, {})

  const options = {
    className: classes,
    keyboard: keyboard || false,
    cancelButtonProps: {
      ...cancelButtonProps,
      className: cancelBtnClasses,
      style: { width: 60, background: '#4A4D4C', ...cancelButtonProps?.style },
    },
    okButtonProps: {
      ...okButtonProps,
      className: okBtnClasses,
      style: { width: 120, ...okButtonProps?.style },
    },
    ...restProps,
  }

  // main
  return (<>{Modal.error(options)}</>)
}

// normal
Error.defaultProps = {
  autoFocusButton: 'ok',
  cancelText: '取消',
  centered: false,
  closable: false,
  keyboard: true,
  mask: true,
  maskClosable: false,
  okText: '确定',
  okType: 'primary',
  width: 416,
  zIndex: 1000
}

export default Error
