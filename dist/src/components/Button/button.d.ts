import React, { FC } from 'react';
import { ButtonProps } from 'antd/es/button';
export declare type ButtonType = 'default' | 'primary' | 'link' | 'lead' | 'gray';
export declare type ButtonWorkType = 'default' | 'high-light';
interface BaseButtonProps {
    /** 设置按钮类型 */
    type?: ButtonType;
    /** 将按钮宽度调整为其父宽度的选项 */
    block?: boolean;
    /** 按钮失效状态 */
    disabled?: boolean;
    /** 设置 button 原生的 type 值 */
    htmlType?: string;
    /** 设置按钮的图标组件 */
    icon?: React.ReactNode;
    /** 设置按钮的加载状态 */
    loading?: boolean;
    /** 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
    href?: string;
    /** 相当于 a 链接的 target 属性，href 存在时生效 */
    target?: string;
    /** 设置激活状态 */
    work?: boolean;
    /** 设置激活状态类型，work 存在时生效（目前仅 type = primary 有两种激活状态） */
    workType?: ButtonWorkType;
    /** 点击按钮时的回调 */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare type FRCButtonProps = BaseButtonProps & Omit<ButtonProps, 'type' | 'danger'>;
export declare const Button: FC<FRCButtonProps>;
export default Button;
