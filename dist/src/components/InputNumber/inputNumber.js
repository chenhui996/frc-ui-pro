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
import React, { useState } from 'react';
import classNames from 'classnames';
import InputNumber from 'antd/es/input-number';
export var FRCInputNumber = function (props) {
    var _a;
    var _b = useState(false), keyDownEnter = _b[0], setKeyDownEnter = _b[1];
    var className = props.className, bordered = props.bordered, disabled = props.disabled, onChange = props.onChange, onKeyDown = props.onKeyDown, restProps = __rest(props, ["className", "bordered", "disabled", "onChange", "onKeyDown"]);
    var classes = classNames('frc-input-number', className, (_a = {},
        _a["frc-input-number-no-border"] = !bordered,
        _a["frc-input-number-enter"] = keyDownEnter,
        _a["frc-input-number-disabled"] = disabled,
        _a));
    var options = __assign(__assign({ className: classes, bordered: bordered, disabled: disabled }, restProps), { onKeyDown: function (e) {
            onKeyDown && onKeyDown(e);
            if (e.code === 'Enter') {
                setKeyDownEnter(true);
            }
        }, onChange: function (e) {
            onChange && onChange(e);
            if (!e && e !== 0) {
                setKeyDownEnter(false);
            }
        } });
    // main
    return React.createElement(InputNumber, __assign({}, options));
};
// normal
FRCInputNumber.defaultProps = {
    bordered: true,
    disabled: false
};
export default FRCInputNumber;
