import {FC} from 'react'
import FRCDatePicker, {FRCDatePickerProps} from './datePicker'
import FRCRangePicker, {FRCRangePickerProps} from './rangePicker'

export type FRCDatePickerComponent = FC<FRCDatePickerProps> & {
    RangePicker: FC<FRCRangePickerProps>
}

const TransDatePicker = FRCDatePicker as FRCDatePickerComponent
TransDatePicker.RangePicker = FRCRangePicker

export default TransDatePicker
