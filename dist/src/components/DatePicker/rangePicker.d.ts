import React, { FC } from 'react';
import { RangePickerProps } from 'antd/es/date-picker/index';
import 'moment/locale/zh-cn';
interface FRCRangePickerCustomProps {
    prefixIcon?: React.ReactNode;
    showTime?: boolean;
}
export declare type FRCRangePickerProps = RangePickerProps & FRCRangePickerCustomProps;
export declare const FRCRangePicker: FC<FRCRangePickerProps>;
export default FRCRangePicker;
