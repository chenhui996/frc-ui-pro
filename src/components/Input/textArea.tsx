import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Input, { TextAreaProps, InputProps } from 'antd/es/input'

const { TextArea } = Input

interface BaseTextAreaProps {
  /** 可以点击清除图标删除内容 */
  allowClear?: boolean
  /** 自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 } */
  autoSize?: boolean | object
  /** 是否有边框 */
  bordered?: boolean
  /** 输入框默认内容 */
  defaultValue?: string
  /** 内容最大长度 */
  maxLength?: number
  /** 是否展示字数 */
  showCount?: boolean | { formatter: (props: { count: number, maxLength?: number }) => string }
  /** 输入框内容 */
  value?: string
  /** 按下回车的回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  /** resize 回调 */
  onResize?: (size: { width: number, height: number }) => void
}

export type FRCTextAreaProps = BaseTextAreaProps & TextAreaProps & InputProps

export const FRCTextArea: FC<FRCTextAreaProps> = (props) => {

  const {
    className,
    showCount,
    disabled,
    ...restProps
  } = props

  const classes = classNames('frc-input frc-input-text-area', className, {
    [`frc-input-text-area-disabled`]: disabled,
  })

  let options = {
    className: classes,
    showCount,
    disabled,
    ...restProps,
  }

  // main
  return <TextArea {...options} />
}

// normal
FRCTextArea.defaultProps = {
  allowClear: false,
  autoSize: false,
  bordered: true,
  showCount: false
}

export default FRCTextArea
