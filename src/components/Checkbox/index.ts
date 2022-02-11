import {FC} from 'react'
import FRCCheckbox, {FrcCheckboxProps} from './checkbox'
import FRCCheckboxGroup, {FrcCheckboxGroupProps} from './checkboxGroup'

export type FRCCheckboxComponent = FC<FrcCheckboxProps> & {
  Group: FC<FrcCheckboxGroupProps>
}

const TransCheckbox = FRCCheckbox as FRCCheckboxComponent

TransCheckbox.Group = FRCCheckboxGroup

export default TransCheckbox