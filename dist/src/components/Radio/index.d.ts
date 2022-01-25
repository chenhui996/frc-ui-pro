import { FC } from 'react';
import { RadioGroupProps, RadioProps } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
export declare type FrcRadioComponent = FC<RadioProps> & {
    Group: FC<RadioGroupProps>;
    Button: FC<RadioButtonProps>;
};
declare const TransRadio: FrcRadioComponent;
export default TransRadio;
