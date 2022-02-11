import { FC } from 'react'
import classNames from 'classnames'
import Modal, { ModalFuncProps } from 'antd/es/modal'
import { ButtonProps } from 'antd'

interface BaseMethodProps {
  /** Modal 完全关闭后的回调 */
  afterClose?: () => void
  /** 指定自动获得焦点的按钮 */
  autoFocusButton?: null | 'ok' | 'cancel'
  /** Modal body 样式 */
  bodyStyle?: React.CSSProperties
  /** cancel 按钮 props */
  cancelButtonProps?: ButtonProps
  /** 设置 Modal.confirm 取消按钮文字 */
  cancelText?: string
  /** 垂直居中展示 Modal */
  centered?: boolean
  /** 容器类名 */
  className?: string
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode
  /** 内容 */
  content?: React.ReactNode
  /** 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | false | HTMLElement | (() => HTMLElement);
  /** 自定义图标 */
  icon?: React.ReactNode
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean
  /** 是否展示遮罩 */
  mask?: boolean
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean
  /** 遮罩样式 */
  maskStyle?: React.CSSProperties
  /** ok 按钮 props */
  okButtonProps?: ButtonProps
  /** 确认按钮文字 */
  okText?: string
  /** 确认按钮类型 */
  okType?: string
  /** 可用于设置浮层的样式，调整浮层位置等 */
  style?: React.CSSProperties
  /** 标题 */
  title?: React.ReactNode
  /** 宽度 */
  width?: string | number
  /** 对话框外层容器的类名 */
  wrapClassName?: string
  /** 设置 Modal 的 z-index */
  zIndex?: number
  /** 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 */
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  /** 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 */
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type FRCMethodProps = BaseMethodProps & Omit<ModalFuncProps,
  'afterClose' | 'getContainer' | 'onOk' | 'onCancel' | 'cancelButtonProps' | 'okButtonProps'>

export const Confirm: FC<FRCMethodProps> = (props) => {
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
  return <>
    {Modal.confirm(options)}
  </>
}

// normal
Confirm.defaultProps = {
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

export default Confirm
