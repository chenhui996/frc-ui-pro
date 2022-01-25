import { FC } from 'react';
import { InputProps } from 'antd/es/input';
declare type InputType = 'default' | 'icon-only';
interface BaseInputProps {
    loading?: boolean;
    type?: InputType;
}
export declare type FRCInputProps = InputProps & BaseInputProps;
export declare const FRCInput: FC<FRCInputProps>;
export default FRCInput;
