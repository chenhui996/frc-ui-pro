import React, { FC, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Select, { SelectProps } from 'antd/es/select'
import { FiSearch, FiX, FiCheck } from 'react-icons/fi'
import ReactDOM from 'react-dom'

interface LabeledValue {
  key?: string;
  value: string | number;
  label: React.ReactNode;
}

export interface BaseSelectProps {
  /** 前缀图标 */
  prefixIcon?: React.ReactNode
  /** 列表下拉时，后缀图标 */
  extendSuffixIcon?: React.ReactNode
  /** 是否显示选中条目右侧图标 */
  removeMenuItemSelectedIcon?: boolean
  /** 支持清除 */
  allowClear?: boolean
  /** 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效 */
  autoClearSearchValue?: boolean
  /** 默认获取焦点 */
  autoFocus?: boolean
  /** 自定义的多选框清空图标 */
  clearIcon?: React.ReactNode
  /** 是否默认高亮第一个选项 */
  defaultActiveFirstOption?: boolean
  /** 是否默认展开下拉菜单 */
  defaultOpen?: boolean
  /** 指定默认选中的条目 */
  defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[] | object
  /** 是否禁用 */
  disabled?: boolean
  /** 下拉菜单的 className 属性 */
  dropdownClassName?: string
  /** 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 */
  dropdownMatchSelectWidth?: boolean | number
  /** 自定义下拉框内容 */
  dropdownRender?: (originNode: React.ReactNode) => React.ReactNode
  /** 下拉菜单的 style 属性 */
  dropdownStyle?: React.CSSProperties
  /** 自定义节点 label、value、options 的字段 */
  fieldNames?: object
  /** 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false */
  filterOption?: boolean | ((inputValue: string, option: Object) => void)
  /** 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction */
  filterSort?: (optionA: Object, optionB: Object) => number
  /** 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 */
  getPopupContainer?: (triggerNode: React.ReactNode) => void
  /** 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式 */
  labelInValue?: boolean
  /** 设置弹窗滚动高度 */
  listHeight?: number
  /** 加载中状态 */
  loading?: boolean
  /** 最多显示多少个 tag，响应式模式会对性能产生损耗 */
  maxTagCount?: number | 'responsive'
  /** 隐藏 tag 时显示的内容 */
  maxTagPlaceholder?: React.ReactNode | ((omittedValues: any) => void)
  /** 最大显示的 tag 文本长度 */
  maxTagTextLength?: number
  /** 自定义多选时当前选中的条目图标 */
  menuItemSelectedIcon?: React.ReactNode
  /** 设置 Select 的模式为多选或标签 */
  mode?: 'multiple' | 'tags'
  /** 当下拉列表为空时显示的内容 */
  notFoundContent?: React.ReactNode
  /** 是否展开下拉菜单 */
  open?: boolean
  /** 搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索。若通过 options 属性配置选项内容，建议设置 optionFilterProp="label" 来对内容进行搜索。 */
  optionFilterProp?: string
  /** 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。 */
  optionLabelProp?: string
  /** 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 */
  options?: { label: string, value: any }[]
  /** 选择框默认文本 */
  placeholder?: string
  /** 自定义的多选框清除图标 */
  removeIcon?: React.ReactNode
  /** 控制搜索文本 */
  searchValue?: string
  /** 是否显示下拉小箭头 */
  showArrow?: boolean
  /** 使单选模式可搜索 */
  showSearch?: boolean
  /** 自定义的选择框后缀图标 */
  suffixIcon?: React.ReactNode
  /** 自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效 */
  tagRender?: (props: any) => React.ReactNode
  /** 在 tags 和 multiple 模式下自动分词的分隔符 */
  tokenSeparators?: string[]
  /** 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） */
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[]
  /** 设置 false 时关闭虚拟滚动 */
  virtual?: boolean
  /** 失去焦点时回调 */
  onBlur?: () => void
  /** 选中 option，或 input 的 value 变化时，调用此函数 */
  onChange?: (value: any, option: Object | Array<Object>) => void
  /** 清除内容时回调 */
  onClear?: () => void
  /** 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 */
  onDeselect?: (e: string | number | LabeledValue) => void
  /** 展开下拉菜单的回调 */
  onDropdownVisibleChange?: (open: boolean) => void
  /** 获得焦点时回调 */
  onFocus?: () => void
  /** 按键按下时回调 */
  onInputKeyDown?: () => void
  /** 鼠标移入时回调 */
  onMouseEnter?: () => void
  /** 鼠标移出时回调 */
  onMouseLeave?: () => void
  /** 下拉列表滚动时的回调 */
  onPopupScroll?: () => void
  /** 文本框值变化时回调	 */
  onSearch?: (value: string) => void
  /** 被选中时调用，参数为选中项的 value (或 key) 值 */
  onSelect?: (e: string | number | LabeledValue, options: Object) => void
  /** 取消焦点 */
  blur?: () => void
  /** 获取焦点 */
  focus?: () => void
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

export type FRCSelectProps = BaseSelectProps & SelectProps

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
    removeMenuItemSelectedIcon,
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
    [`frc-select-remove-selected-icon`]: removeMenuItemSelectedIcon,
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
  menuItemSelectedIcon: <FiCheck />,
  removeMenuItemSelectedIcon: false,
  placeholder: '请选择',
}

export default FRCSelect
