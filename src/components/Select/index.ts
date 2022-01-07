// import FRCSelect from './select'
// export default FRCSelect

import {FC} from 'react'
import FRCSelect, {FRCSelectProps} from './select'
import Select, {OptionProps} from 'antd/es/select'

const {OptGroup, Option} = Select

interface OptgroupProps {
  key?: string
  label?: string | React.ReactNode
  children: React.ReactNode
//   [prop: string]: any
}

export type FrcSelectComponent = FC<FRCSelectProps> & {
  Option: FC<OptionProps>
} & {
  OptGroup: FC<OptgroupProps>
}

const TransSelect = FRCSelect as FrcSelectComponent

TransSelect.Option = Option
TransSelect.OptGroup = OptGroup

export default TransSelect
