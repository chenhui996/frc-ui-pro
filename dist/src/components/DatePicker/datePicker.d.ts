import React, { FC } from 'react';
import { DatePickerProps } from 'antd';
import 'moment/locale/zh-cn';
interface FRCDatePickerCustomProps {
    prefixIcon?: React.ReactNode;
    showTime?: boolean;
}
export declare type FRCDatePickerProps = DatePickerProps & FRCDatePickerCustomProps;
export declare const FRCDatePicker: FC<FRCDatePickerProps>;
export default FRCDatePicker;
