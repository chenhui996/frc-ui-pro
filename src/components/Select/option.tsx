import React, { FC } from 'react'
import Select, { OptionProps } from 'antd/es/select'

const { Option } = Select

interface BaseOptionProps {
    /** Option 器类名 */
    className?: string
    /** 是否禁用 */
    disabled?: boolean
    /** 选项上的原生 title 提示 */
    title?: string
    /** 默认根据此属性值进行筛选 */
    value?: string | number
}

export type FRCSelectOptionProps = BaseOptionProps & OptionProps

export const FRCSelectOption: FC<FRCSelectOptionProps> = (props) => {
    return (
        <Option {...props} />
    )
}

// normal
FRCSelectOption.defaultProps = {
    disabled: false,
}

export default FRCSelectOption
