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
import { TimePicker } from 'antd';
import ReactDOM from 'react-dom';
import { BackwardOutlined, ForwardOutlined, ClockCircleOutlined, CaretRightOutlined, CaretLeftOutlined, } from '@ant-design/icons';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
var RangePicker = TimePicker.RangePicker;
var FORMAT_COLUMNS = ['HH:mm', 'HH', 'mm', 'ss', 'mm A', 'mm a'];
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
export var FRCRangeTimePicker = function (props) {
    var _a, _b;
    var _c = useState(['', '']), dateValue = _c[0], setDateValue = _c[1];
    var nodes = useRef(null);
    var className = props.className, prefixIcon = props.prefixIcon, dropdownClassName = props.dropdownClassName, showTime = props.showTime, suffixIcon = props.suffixIcon, format = props.format, popupClassName = props.popupClassName, onChange = props.onChange, onOpenChange = props.onOpenChange, restProps = __rest(props
    // add prefix node
    , ["className", "prefixIcon", "dropdownClassName", "showTime", "suffixIcon", "format", "popupClassName", "onChange", "onOpenChange"]);
    // add prefix node
    useEffect(function () {
        prefixIcon && addPrefixNode(nodes, prefixIcon);
    }, [prefixIcon]);
    var classes = classNames('frc-date-picker frc-time-picker', className, (_a = {},
        _a["frc-date-picker-work"] = dateValue,
        _a["frc-date-picker-suffix-icon"] = suffixIcon,
        _a));
    var classesDropdown = classNames('frc-date-picker-dropdown frc-time-picker-dropdown', popupClassName, (_b = {},
        _b["frc-time-picker-dropdown-now-float"] = FORMAT_COLUMNS.indexOf(format) !== -1,
        _b));
    var options = __assign({ className: classes, prefixIcon: prefixIcon, popupClassName: classesDropdown, suffixIcon: suffixIcon, format: format, onChange: function (dates, dateStrings) {
            onChange && onChange(dates, dateStrings);
            setDateValue(dateStrings);
        }, onOpenChange: function (open) {
            onOpenChange && onOpenChange(open);
            open &&
                setTimeout(function () {
                    insertFrcBtn();
                }, 0);
        } }, restProps);
    // main
    return (React.createElement("div", { ref: nodes, className: "frc-date-picker-container" },
        React.createElement(RangePicker, __assign({}, options))));
};
// normal
FRCRangeTimePicker.defaultProps = {
    prefixIcon: React.createElement(ClockCircleOutlined, null),
    suffixIcon: false,
    // showToday: false,
    superPrevIcon: React.createElement(BackwardOutlined, null),
    superNextIcon: React.createElement(ForwardOutlined, null),
    prevIcon: React.createElement(CaretLeftOutlined, null),
    nextIcon: React.createElement(CaretRightOutlined, null),
    locale: locale,
    separator: React.createElement("span", { style: { fontSize: 14 } }, "\uFF5E"),
};
export default FRCRangeTimePicker;
