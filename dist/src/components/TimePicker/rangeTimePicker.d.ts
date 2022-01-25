import React, { FC } from 'react';
import { TimeRangePickerProps } from 'antd/es/time-picker';
import 'moment/locale/zh-cn';
interface FRCRangeTimePickerCustomProps {
    prefixIcon?: React.ReactNode;
    showTime?: boolean;
}
export declare type FRCRangeTimePickerProps = TimeRangePickerProps & FRCRangeTimePickerCustomProps;
export declare const FRCRangeTimePicker: FC<FRCRangeTimePickerProps>;
export default FRCRangeTimePicker;
