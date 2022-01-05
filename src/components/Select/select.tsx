import React, {FC, useState} from 'react'
import classNames from 'classnames'
import Select, {SelectProps} from 'antd/es/select'
import {FiSearch} from 'react-icons/fi'

export interface FRCSelectProps extends SelectProps {
  prefixIcon?: React.ReactNode
  extendSuffixIcon?: React.ReactNode
}

export const FRCSelect: FC<FRCSelectProps> = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const {
    className,
    suffixIcon,
    showSearch,
    children,
    prefixIcon,
    extendSuffixIcon,
    disabled,
    onDropdownVisibleChange,
    ...restProps
  } = props

  const classes = classNames('frc-select', className, {})

  const classPrefixIcon = classNames('frc-select-prefix', '', {
    [`frc-select-prefix-icon-disabled`]: disabled,
  })

  const options = {
    className: classes,
    showSearch,
    suffixIcon:
      showSearch && openDropdown ? (
        extendSuffixIcon ? (
          extendSuffixIcon
        ) : (
          <FiSearch />
        )
      ) : (
        suffixIcon
      ),
    disabled,
    onDropdownVisibleChange: (open: boolean) => {
      onDropdownVisibleChange && onDropdownVisibleChange(open)
      setOpenDropdown(open)
    },
    ...restProps,
  }

  if (!prefixIcon && prefixIcon != 0) {
    return <Select {...options}>{children}</Select>
  } else {
    return (
      <span className={classPrefixIcon}>
        <span className="frc-select-prefix-wrapper">{prefixIcon}</span>
        <Select {...options}>{children}</Select>
      </span>
    )
  }
}

// normal
FRCSelect.defaultProps = {
  disabled: false,
  dropdownClassName: 'frc-select',
  listHeight: 200,
  showSearch: false,
}

export default FRCSelect
