import React, {FC, useState, useEffect, useRef} from 'react'
import classNames from 'classnames'
import Select, {SelectProps} from 'antd/es/select'
import {FiSearch, FiX} from 'react-icons/fi'
import ReactDOM from 'react-dom'

export interface FRCSelectProps extends SelectProps {
  prefixIcon?: React.ReactNode
  extendSuffixIcon?: React.ReactNode
}

const addPrefixNode = (nodes: any, prefixIcon: React.ReactNode) => {
  const addNode = document.createElement('div')
  addNode.setAttribute('class', 'frc-select-prefix-wrapper')

  // dom container insert
  const currentDom = nodes.current
  currentDom &&
    currentDom
      .querySelector('.frc-select')
      .insertBefore(addNode, currentDom.querySelector('.ant-select-selector'))

  // icon insert
  ReactDOM.render(
    prefixIcon as any,
    currentDom.querySelector('.frc-select-prefix-wrapper'),
  )
}

export const FRCSelect: FC<FRCSelectProps> = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const nodes = useRef(null)
  const {
    className,
    suffixIcon,
    showSearch,
    children,
    prefixIcon,
    extendSuffixIcon,
    disabled,
    dropdownClassName,
    onDropdownVisibleChange,
    ...restProps
  } = props

  // add prefix node
  useEffect(() => {
    if (prefixIcon) {
      addPrefixNode(nodes, prefixIcon)
    }
  }, [prefixIcon])

  const classes = classNames('frc-select', className, {
    [`frc-select-prefix`]: prefixIcon,
    [`frc-select-prefix-icon-disabled`]: disabled,
  })

  const classesDropdown = classNames('frc-select', dropdownClassName, {
    [`frc-select-prefix-dropdown`]: prefixIcon,
    [`test-test`]: openDropdown,
  })

  const options = {
    className: classes,
    showSearch,
    dropdownClassName: classesDropdown,
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

  return (
    <div ref={nodes} className="frc-select-container">
      <Select {...options}>{children}</Select>
    </div>
  )
}

// normal
FRCSelect.defaultProps = {
  disabled: false,
  listHeight: 200,
  showSearch: false,
  showArrow: true,
  clearIcon: <FiX />,
  prefixIcon: null,
}

export default FRCSelect
