import {FC} from 'react'
import FRCCheckbox from './checkbox'
import FRCCheckboxGroup from './checkboxGroup'
import {CheckboxProps} from 'antd/es/checkbox/Checkbox'
import {CheckboxGroupProps} from 'antd/es/checkbox/Group'

export type FRCCheckboxComponent = FC<CheckboxProps> & {
  Group: FC<CheckboxGroupProps>
}

const TransCheckbox = FRCCheckbox as FRCCheckboxComponent

TransCheckbox.Group = FRCCheckboxGroup

export default TransCheckbox
