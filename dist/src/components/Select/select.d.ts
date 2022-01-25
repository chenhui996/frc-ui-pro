import React, { FC } from 'react';
import { SelectProps } from 'antd/es/select';
export interface FRCSelectProps extends SelectProps {
    prefixIcon?: React.ReactNode;
    extendSuffixIcon?: React.ReactNode;
    removeMenuItemSelectedIcon?: boolean;
}
export declare const FRCSelect: FC<FRCSelectProps>;
export default FRCSelect;
