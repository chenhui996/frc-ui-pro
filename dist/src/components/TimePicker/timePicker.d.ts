import React, { FC } from 'react';
import { TimePickerProps } from 'antd';
import 'moment/locale/zh-cn';
interface FRCTimePickerCustomProps {
    prefixIcon?: React.ReactNode;
    showTime?: boolean;
}
export declare type FRCTimePickerProps = TimePickerProps & FRCTimePickerCustomProps;
export declare const FRCTimePicker: FC<FRCTimePickerProps>;
export default FRCTimePicker;
