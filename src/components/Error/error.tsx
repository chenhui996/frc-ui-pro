import React, { FC } from 'react';
import classNames from 'classnames';
import Button from '../Button'

interface ErrorProps {
  /** 设置标题文本内容 */
  title?: string;
  /** 设置按钮文本内容 */
  btnText?: string;
  /** 设置弹框类名 */
  className?: string;
  /** 设置按钮点击事件 */
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {};
}

function windowReload() {
  window.location.reload();
}

export const Error: FC<ErrorProps> = (props) => {

  const { className, title, btnText, onClick, ...restProps } = props;

  const classes = classNames('frc-error', className, {})

  return (
    <div className="frc-error-wrapper">
      <div className={classes} {...restProps}>
        <p className="frc-error-title">{title || '页面崩溃'}</p>
        <Button type="primary" onClick={onClick || windowReload} style={{ minWidth: 120 }}>
          {btnText || '重新载入'}
        </Button>
      </div>
    </div>
  );
}

export default Error
