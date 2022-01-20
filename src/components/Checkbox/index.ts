import {FC} from 'react'
import FRCCheckbox, {FrcCheckboxProps} from './checkbox'
import FRCCheckboxGroup from './checkboxGroup'
import {CheckboxGroupProps} from 'antd/es/checkbox/Group'

export type FRCCheckboxComponent = FC<FrcCheckboxProps> & {
  Group: FC<CheckboxGroupProps>
}

const TransCheckbox = FRCCheckbox as FRCCheckboxComponent

TransCheckbox.Group = FRCCheckboxGroup

export default TransCheckbox