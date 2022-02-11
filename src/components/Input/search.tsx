import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Input, { SearchProps } from 'antd/es/input'
import { FiSearch } from 'react-icons/fi'

const { Search } = Input
export interface BaseInputProps {
  /** 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。 */
  enterButton?: boolean | React.ReactNode
  /** 加载中 */
  loading?: boolean
  /** 点击搜索图标、清除图标，或按下回车键时的回调 */
  onSearch?: (value: string) => void
}

export type FRCSearchProps = BaseInputProps & SearchProps

export const FRCSearch: FC<FRCSearchProps> = (props) => {
  const [keyDownEnter, setKeyDownEnter] = useState(false)

  const {
    className,
    bordered,
    prefix,
    loading,
    value,
    onChange,
    onKeyDown,
    ...restProps
  } = props

  const classes = classNames('frc-input', className, {
    [`frc-input-no-border`]: !bordered,
    [`frc-input-enter`]: keyDownEnter,
    [`frc-input-prefix`]: prefix,
    [`frc-input-search-loading`]: loading,
  })

  let options = {
    className: classes,
    ...restProps,
    bordered,
    prefix,
    loading,
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
  loading: false,
  type: 'default'
}

export default FRCSearch
