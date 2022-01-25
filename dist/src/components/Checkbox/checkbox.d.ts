import React, { FC } from 'react';
import { CheckboxProps } from 'antd';
export interface BaseCheckboxProps {
    /** 自动获取焦点 */
    autoFocus?: boolean;
    /** 指定当前是否选中 */
    checked?: boolean;
    /** 初始是否选中 */
    defaultChecked?: boolean;
    /** 失效状态 */
    disabled?: boolean;
    /** 设置 indeterminate 状态，只负责样式控制 */
    indeterminate?: boolean;
    /** 变化时回调函数 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare type FrcCheckboxProps = BaseCheckboxProps & CheckboxProps;
export declare const FRCCheckbox: FC<FrcCheckboxProps>;
export default FRCCheckbox;
