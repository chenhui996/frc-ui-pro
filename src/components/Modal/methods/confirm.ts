// import { FC } from 'react'
import classNames from 'classnames'
import Modal, { ModalFuncProps } from 'antd/es/modal'

const Confirm: (e: ModalFuncProps) => void = (props) => {
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
  return Modal.confirm(options)
}

export default Confirm
