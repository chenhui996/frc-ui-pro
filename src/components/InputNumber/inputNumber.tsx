import React, {FC, useState} from 'react'
import classNames from 'classnames'
import InputNumber, {InputNumberProps} from 'antd/es/input-number'

export const FRCInputNumber: FC<InputNumberProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)

  const {className, bordered,disabled, onChange, onKeyDown, ...restProps} = props

  const classes = classNames('frc-input-number', className, {
    [`frc-input-number-no-border`]: !bordered,
    [`frc-input-number-enter`]: keyDownEnter,
    [`frc-input-number-disabled`]: disabled,
  })

  let options = {
    className: classes,
    bordered,
    disabled,
    ...restProps,
    onKeyDown: (e: any) => {
      onKeyDown && onKeyDown(e)
      if (e.code === 'Enter') {
        setKeyDownEnter(true)
      }
    },
    onChange: (e: any) => {
      onChange && onChange(e)
      if (!e && e !== 0) {
        setKeyDownEnter(false)
      }
    },
  }

  // main
  return <InputNumber {...options} />
}

// normal
FRCInputNumber.defaultProps = {
  bordered: true,
  disabled: false
}

export default FRCInputNumber
