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
import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { DatePicker } from 'antd';
import { IoCalendarOutline } from 'react-icons/io5';
import ReactDOM from 'react-dom';
import { BackwardOutlined, ForwardOutlined, CaretLeftOutlined, CaretRightOutlined, } from '@ant-design/icons';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
var addPrefixNode = function (nodes, prefixIcon) {
    var addNode = document.createElement('div');
    addNode.setAttribute('class', 'frc-date-picker-prefix');
    // dom container insert
    var currentDom = nodes.current;
    var parentNode = currentDom.querySelector('.ant-picker-input');
    // -------------------------------------------------------------------
    if (parentNode) {
        parentNode.insertBefore(addNode, currentDom.querySelector('input'));
        // icon insert
        ReactDOM.render(prefixIcon, currentDom.querySelector('.frc-date-picker-prefix'));
    }
};
var insertFrcBtn = function () {
    var currentDoms = document.querySelectorAll('.ant-picker-ok button');
    currentDoms && currentDoms.forEach(function (dom) {
        var btnClass = (dom === null || dom === void 0 ? void 0 : dom.getAttribute('class')) || '';
        if (btnClass.indexOf('frc-btn') === -1) {
            dom === null || dom === void 0 ? void 0 : dom.setAttribute('class', btnClass + ' frc-btn frc-btn-primary');
        }
    });
};
export var FRCDatePicker = function (props) {
    var _a;
    var _b = useState(''), dateValue = _b[0], setDateValue = _b[1];
    var nodes = useRef(null);
    var className = props.className, prefixIcon = props.prefixIcon, dropdownClassName = props.dropdownClassName, showTime = props.showTime, suffixIcon = props.suffixIcon, onChange = props.onChange, onOpenChange = props.onOpenChange, restProps = __rest(props
    // add prefix node
    , ["className", "prefixIcon", "dropdownClassName", "showTime", "suffixIcon", "onChange", "onOpenChange"]);
    // add prefix node
    useEffect(function () {
        prefixIcon && addPrefixNode(nodes, prefixIcon);
    }, [prefixIcon]);
    var classes = classNames('frc-date-picker', className, (_a = {},
        _a["frc-date-picker-work"] = dateValue,
        _a["frc-date-picker-suffix-icon"] = suffixIcon,
        _a));
    var classesDropdown = classNames('frc-date-picker-dropdown', dropdownClassName, {});
    var options = __assign({ className: classes, prefixIcon: prefixIcon, dropdownClassName: classesDropdown, showTime: showTime, suffixIcon: suffixIcon, onChange: function (value, dateString) {
            onChange && onChange(value, dateString);
            setDateValue(dateString);
        }, onOpenChange: function (open) {
            onOpenChange && onOpenChange(open);
            open && showTime && setTimeout(function () {
                insertFrcBtn();
            }, 0);
        } }, restProps);
    // main
    return (React.createElement("div", { ref: nodes, className: "frc-date-picker-container" },
        React.createElement(DatePicker, __assign({}, options))));
};
// normal
FRCDatePicker.defaultProps = {
    prefixIcon: React.createElement(IoCalendarOutline, null),
    suffixIcon: false,
    showToday: false,
    superPrevIcon: React.createElement(BackwardOutlined, null),
    superNextIcon: React.createElement(ForwardOutlined, null),
    prevIcon: React.createElement(CaretLeftOutlined, null),
    nextIcon: React.createElement(CaretRightOutlined, null),
    locale: locale,
};
export default FRCDatePicker;
