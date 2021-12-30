import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Input, {InputProps} from 'antd/es/input'

interface BaseInputProps {
  loading?: boolean
}

export type FRCInputProps = InputProps & BaseInputProps

export const FRCInput: FC<FRCInputProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)

  const {
    className,
    bordered = true,
    allowClear,
    onKeyDown,
    loading,
    ...restProps
  } = props
  // // btn, btn-lg, btn-primary
  const classes = classNames('frc-input', className, {
    [`frc-input-no-border`]: !bordered,
    [`frc-input-enter`]: keyDownEnter,
    [`frc-input-allowClear`]: allowClear,
  })

  let options = {
    className: classes,
    ...restProps,
    bordered,
    allowClear,
    onKeyDown: (e: any) => {
      onKeyDown && onKeyDown(e)
      if (e.code === 'Enter') {
        setKeyDownEnter(true)
      }
    },
    loading
  }

  // main
  return <Input {...options} />
}

export default FRCInput
