import React, { FC } from 'react'
import classNames from 'classnames'
import Modal, { ModalProps } from 'antd/es/modal'
import Button from '../Button/index'

export const ModalFooter = (props: ModalProps) => {
  const { onOk, onCancel, confirmLoading } = props

  return (
    <>
      <Button type="gray" onClick={onCancel} style={{ width: 60 }}>取消</Button>
      <Button loading={confirmLoading} type="primary" onClick={onOk} style={{ width: 120 }}>
        确定
      </Button>
    </>
  )
}

export type FRCModalProps = ModalProps

export const FRCModal: FC<FRCModalProps> = (props) => {
  const {
    className,
    children,
    footer,
    ...restProps
  } = props
  const classes = classNames('frc-modal', className, {
  })

  const options = {
    className: classes,
    footer: footer || <ModalFooter {...{ ...restProps }} />,
    ...restProps,
  }

  // main
  return (
    <Modal {...options}>{children}</Modal>

  )
}

// normal
FRCModal.defaultProps = {
  width: 320,
  maskClosable: false,
  keyboard:false,
}

export default FRCModal
