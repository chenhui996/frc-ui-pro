import React, { FC } from 'react'
import classNames from 'classnames'
import AntdModal, { ModalProps } from 'antd/es/modal'
import Button, { FRCButtonProps as ButtonProps } from '../Button/button'
export interface BaseModalProps {
  /** Modal 完全关闭后的回调 */
  afterClose?: () => void
  /** Modal body 样式 */
  bodyStyle?: React.CSSProperties
  /** cancel 按钮 props */
  cancelFrcButtonProps?: ButtonProps
  /** 取消按钮文字 */
  cancelText?: React.ReactNode
  /** 垂直居中展示 Modal */
  centered?: boolean
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode
  /** 确定按钮 loading */
  confirmLoading?: boolean
  /** 关闭时销毁 Modal 里的子元素 */
  destroyOnClose?: boolean
  /** 对话框关闭后是否需要聚焦触发元素 */
  focusTriggerAfterClose?: boolean
  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
  footer?: React.ReactNode
  /** 强制渲染 Modal */
  forceRender?: boolean
  /** 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | false | HTMLElement | (() => HTMLElement);
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean
  /** 是否展示遮罩 */
  mask?: boolean
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 遮罩样式	 */
  maskStyle?: React.CSSProperties
  /** 自定义渲染对话框 */
  modalRender?: (node: React.ReactNode) => React.ReactNode
  /** ok 按钮 props */
  okFrcButtonProps?: ButtonProps
  /** 确认按钮文字 */
  okText?: React.ReactNode
  /** 确认按钮类型 */
  okBtnType?: 'default' | 'primary' | 'link' | 'lead' | 'gray'
  /** 可用于设置浮层的样式，调整浮层位置等 */
  style?: React.CSSProperties
  /** 标题 */
  title?: React.ReactNode
  /** 对话框是否可见 */
  visible?: boolean
  /** 宽度 */
  width?: string | number
  /** 对话框外层容器的类名 */
  wrapClassName?: string
  /** 设置 Modal 的 z-index */
  zIndex?: number
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

// Omit: 去重， 由于 antd 也写了 type 注释
export type FRCModalProps = BaseModalProps & Omit<ModalProps,
  'okType' | 'getContainer' | 'onOk' | 'onCancel' | 'cancelButtonProps' | 'okButtonProps' | 'modalRender' | 'afterClose'>

export const ModalFooter = (props: FRCModalProps) => {
  const { onOk, onCancel, confirmLoading, okBtnType, okFrcButtonProps, cancelFrcButtonProps } = props

  return (
    <>
      <Button type="gray" onClick={onCancel} style={{ width: 60 }} {...cancelFrcButtonProps}>取消</Button>
      <Button loading={confirmLoading} type={okBtnType || "primary"} onClick={onOk} style={{ width: 120 }} {...okFrcButtonProps}>
        确定
      </Button>
    </>
  )
}

export const Modal: FC<FRCModalProps> = (props) => {
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
    <AntdModal {...options}>{children}</AntdModal>
  )
}

// normal
Modal.defaultProps = {
  width: 320,
  centered: false,
  closable: true,
  confirmLoading: false,
  destroyOnClose: false,
  focusTriggerAfterClose: true,
  forceRender: false,
  keyboard: false,
  mask: true,
  maskClosable: false,
  okText: '确定',
  okBtnType: 'primary',
  zIndex: 1000
}

export default Modal
