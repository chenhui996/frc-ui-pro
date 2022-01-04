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
      if (!e.target.value && e.target.value !== 0) {
        setKeyDownEnter(false)
      }
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
