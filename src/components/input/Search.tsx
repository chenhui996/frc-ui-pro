import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Input, {SearchProps} from 'antd/es/input'
import {SearchOutlined} from '@ant-design/icons'

const {Search} = Input

// interface BaseInputProps {
//   loading?: boolean
// }

// export type FRCInputProps = InputProps & BaseInputProps

export const FRCSearch: FC<SearchProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)
  const [searchFocus, setSearchFocus] = useState(false)

  const {
    className,
    bordered = true,
    allowClear,
    onKeyDown,
    onFocus,
    onBlur,
    ...restProps
  } = props
  // // btn, btn-lg, btn-primary
  const classes = classNames('input', className, {
    [`input-no-border`]: !bordered,
    [`input-enter`]: keyDownEnter,
    [`input-allowClear`]: allowClear,
    [`input-search-focus`]: searchFocus,
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
    onFocus: (e: any) => {
      onFocus && onFocus(e)
      setSearchFocus(true)
    },
    onBlur: (e: any) => {
      onBlur && onBlur(e)
      setSearchFocus(false)
    },
  }

  // main
  return <Search {...options} />
}

export default FRCSearch
