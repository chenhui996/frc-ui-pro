import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Input, {InputProps} from 'antd/es/input'

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
    onKeyDown,
    ...restProps
  } = props
  // // btn, btn-lg, btn-primary
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
    prefix,
    loading,
    type,
    onKeyDown: (e: any) => {
      onKeyDown && onKeyDown(e)
      if (e.code === 'Enter') {
        setKeyDownEnter(true)
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
