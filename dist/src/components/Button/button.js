var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import AntdButton from 'antd/es/button';
import { CaretRightOutlined } from '@ant-design/icons';
export var Button = function (props) {
    var _a;
    var className = props.className, size = props.size, type = props.type, children = props.children, href = props.href, work = props.work, workType = props.workType, loading = props.loading, restProps = __rest(props
    // btn, btn-lg, btn-primary
    , ["className", "size", "type", "children", "href", "work", "workType", "loading"]);
    // btn, btn-lg, btn-primary
    var classes = classNames('frc-btn', className, (_a = {},
        _a["frc-btn-".concat(type)] = type,
        _a["frc-btn-".concat(size)] = size,
        _a["frc-btn-work-".concat(workType)] = work,
        _a["frc-btn-loading"] = loading,
        _a["frc-btn-icon-only"] = !children,
        _a));
    var options = __assign({ className: classes, loading: loading }, restProps);
    // main
    return (React.createElement(AntdButton, __assign({}, options),
        React.createElement("span", { className: "lead-child-box" },
            children,
            type === 'lead' && children && (React.createElement(CaretRightOutlined, { style: { marginLeft: 8, fontSize: 10 } })))));
};
// normal
Button.defaultProps = {
    type: 'default',
    block: false,
    disabled: false,
    loading: false,
    work: false,
    workType: 'default',
    htmlType: 'button'
};
export default Button;
