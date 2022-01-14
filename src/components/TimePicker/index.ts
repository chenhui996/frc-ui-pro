// // import {FC} from 'react'
// import TimePicker  from './timePicker'

// export default TimePicker
import {FC} from 'react'
import FRCTimePicker, {FRCTimePickerProps} from './timePicker'
import FRCRangePicker, {FRCRangeTimePickerProps} from './rangeTimePicker'

export type FRCTimePickerComponent = FC<FRCTimePickerProps> & {
    RangePicker: FC<FRCRangeTimePickerProps>
}

const TransTimePicker = FRCTimePicker as FRCTimePickerComponent
TransTimePicker.RangePicker = FRCRangePicker

export default TransTimePicker

