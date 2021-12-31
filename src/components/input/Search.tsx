import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Input, {SearchProps} from 'antd/es/input'
import {FiSearch} from 'react-icons/fi'

const {Search} = Input

type InputType = 'default' | 'icon-only'
interface BaseInputProps {
  type?: InputType
}

export type FRCSearchProps = SearchProps & BaseInputProps

export const FRCSearch: FC<FRCSearchProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)
  const [inputValue, setInputValue] = useState(null)
  // const [inputIsBlur, setInputIsBlur] = useState(false)
  const [inputIsFocus, setInputIsFocus] = useState(false)

  const {
    className,
    bordered,
    prefix,
    loading,
    type,
    value,
    onFocus,
    onChange,
    onBlur,
    onKeyDown,
    ...restProps
  } = props

  const classes = classNames('frc-input', className, {
    [`frc-input-no-border`]: !bordered,
    [`frc-input-enter`]: keyDownEnter,
    [`frc-input-prefix`]: prefix,
    [`frc-input-${type}`]: type,
    [`frc-input-active-stop`]: !inputValue && !inputIsFocus,
    [`frc-input-active-start`]: inputIsFocus,
    [`frc-input-search-loading`]: loading,
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
      setInputValue(e.target.value)
    },
    onFocus: (e: any) => {
      onFocus && onFocus(e)
      console.log('onFocus')
      setInputIsFocus(true)
    },
    onBlur: (e: any) => {
      onBlur && onBlur(e)
      setInputIsFocus(false)
    },
  }

  // main
  return <Search {...options} />
}

// normal
FRCSearch.defaultProps = {
  bordered: true,
  enterButton: <FiSearch />,
}

export default FRCSearch
