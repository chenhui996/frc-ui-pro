import { FC } from 'react';
import { FRCSelectProps } from './select';
import { OptionProps } from 'antd/es/select';
interface OptgroupProps {
    key?: string;
    label?: string | React.ReactNode;
    children: React.ReactNode;
}
export declare type FrcSelectComponent = FC<FRCSelectProps> & {
    Option: FC<OptionProps>;
} & {
    OptGroup: FC<OptgroupProps>;
};
declare const TransSelect: FrcSelectComponent;
export default TransSelect;
