import React, { FC, useRef } from 'react'
import classNames from 'classnames'
import Modal, { ModalProps } from 'antd/es/modal'
import Button from '../Button/index'

const ModalFooter = (props: any) => {
  const { onOk, onCancel, ...restProps } = props

  return (
    <>
      <Button type="gray" onClick={onCancel} style={{ width: 60 }}>取消</Button>
      <Button type="primary" onClick={onOk} style={{ width: 120 }}>
        确定
      </Button>

    </>
  )
}

export const FRCModal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    footer,
    ...restProps
  } = props
  const classes = classNames('frc-modal', className, {
  })

  const nodeRef = useRef(null);

  const options = {
    className: classes,
    footer: footer || <ModalFooter {...restProps} />,
    ...restProps,
  }

  // main
  return (
    <div ref={nodeRef}>
      <Modal {...options}>{children}</Modal>
    </div>

  )
}

// normal
FRCModal.defaultProps = {
  width: 320,
}

export default FRCModal
