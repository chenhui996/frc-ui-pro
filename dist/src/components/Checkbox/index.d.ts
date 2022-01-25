import { FC } from 'react';
import { FrcCheckboxProps } from './checkbox';
import { CheckboxGroupProps } from 'antd/es/checkbox/Group';
export declare type FRCCheckboxComponent = FC<FrcCheckboxProps> & {
    Group: FC<CheckboxGroupProps>;
};
declare const TransCheckbox: FRCCheckboxComponent;
export default TransCheckbox;
