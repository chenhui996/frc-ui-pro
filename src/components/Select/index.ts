import { FC } from 'react'
import FRCSelect, { FRCSelectProps } from './select'
import FRCSelectOption, { FRCSelectOptionProps } from './option'
import OptGroup, { FRCSelectOptGroupProps } from './optGroup'

import Select from 'antd/es/select'

const { OptGroup: AntdOptGroup } = Select

export type FrcSelectComponent = FC<FRCSelectProps> & {
  Option: FC<FRCSelectOptionProps>
  OptGroup: FC<FRCSelectOptGroupProps>
  OptGroupApi: FC<FRCSelectOptGroupProps>
}

const TransSelect = FRCSelect as FrcSelectComponent

TransSelect.Option = FRCSelectOption
TransSelect.OptGroup = AntdOptGroup
TransSelect.OptGroupApi = OptGroup

export default TransSelect
