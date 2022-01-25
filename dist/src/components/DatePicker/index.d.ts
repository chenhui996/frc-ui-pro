import { FC } from 'react';
import { FRCDatePickerProps } from './datePicker';
import { FRCRangePickerProps } from './rangePicker';
export declare type FRCDatePickerComponent = FC<FRCDatePickerProps> & {
    RangePicker: FC<FRCRangePickerProps>;
};
declare const TransDatePicker: FRCDatePickerComponent;
export default TransDatePicker;
