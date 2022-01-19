import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Input, {InputProps} from 'antd/es/input'
import {FiSearch} from 'react-icons/fi'

type InputType = 'default' | 'icon-only'
interface BaseInputProps {
  loading?: boolean
  type?: InputType
}

export type FRCInputProps = InputProps & BaseInputProps

export const FRCInput: FC<FRCInputProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)

  const {
    className,
    bordered,
    prefix,
    loading,
    type,
    value,
    onChange,
    onKeyDown,
    ...restProps
  } = props

  const classes = classNames('frc-input', className, {
    [`frc-input-no-border`]: !bordered,
    [`frc-input-enter`]: keyDownEnter,
    [`frc-input-prefix`]: prefix,
    [`frc-input-${type}`]: type,
  })

  let options = {
    className: classes,
    ...restProps,
    bordered,
    prefix: !prefix && type === 'icon-only' ? <FiSearch /> : prefix,
    loading,
    type,
    value,
    onKeyDown: (e: any) => {
      onKeyDown && onKeyDown(e)
      if (e.code === 'Enter') {
        setKeyDownEnter(true)
      }
    },
    onChange: (e: any) => {
      onChange && onChange(e)
      if (!e.target.value && e.target.value !== 0) {
        setKeyDownEnter(false)
      }
    },
  }

  // main
  return <Input {...options} />
}

// normal
FRCInput.defaultProps = {
  bordered: true,
  // type: 'default',
}

export default FRCInput