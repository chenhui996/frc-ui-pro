import React, { FC } from 'react'
import Select from 'antd/es/select'

const { OptGroup: AntdOptGroup } = Select

interface BaseOptGroupProps {
    /** Key */
    key?: string
    /** 组名 */
    label?: string | React.ReactNode
    /** 子组件 */
    children: React.ReactNode
}

export type FRCSelectOptGroupProps = BaseOptGroupProps

export const OptGroup: FC<FRCSelectOptGroupProps> = (props) => {
    return (
        <AntdOptGroup {...props} />
    )
}

// normal
OptGroup.defaultProps = {}

export default OptGroup
