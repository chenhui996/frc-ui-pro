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
import { Checkbox } from 'antd';
export var FRCCheckbox = function (props) {
    var className = props.className, restProps = __rest(props, ["className"]);
    var classes = classNames('frc-checkbox', className, {});
    var options = __assign({ className: classes }, restProps);
    // main
    return React.createElement(Checkbox, __assign({}, options));
};
// normal
FRCCheckbox.defaultProps = {
    autoFocus: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
};
export default FRCCheckbox;
