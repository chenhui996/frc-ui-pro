import { FC } from 'react';
import { FRCTimePickerProps } from './timePicker';
import { FRCRangeTimePickerProps } from './rangeTimePicker';
export declare type FRCTimePickerComponent = FC<FRCTimePickerProps> & {
    RangePicker: FC<FRCRangeTimePickerProps>;
};
declare const TransTimePicker: FRCTimePickerComponent;
export default TransTimePicker;
