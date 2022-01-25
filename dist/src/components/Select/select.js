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
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Select from 'antd/es/select';
import { FiSearch, FiX, FiCheck } from 'react-icons/fi';
import ReactDOM from 'react-dom';
var addPrefixNode = function (nodes, prefixIcon) {
    var addNode = document.createElement('div');
    addNode.setAttribute('class', 'frc-select-prefix-wrapper');
    // dom container insert
    var currentDom = nodes.current;
    currentDom &&
        currentDom
            .querySelector('.frc-select')
            .insertBefore(addNode, currentDom.querySelector('.ant-select-selector'));
    // icon insert
    ReactDOM.render(prefixIcon, currentDom.querySelector('.frc-select-prefix-wrapper'));
};
export var FRCSelect = function (props) {
    var _a, _b;
    var _c = useState(false), openDropdown = _c[0], setOpenDropdown = _c[1];
    var nodes = useRef(null);
    var className = props.className, suffixIcon = props.suffixIcon, showSearch = props.showSearch, children = props.children, prefixIcon = props.prefixIcon, extendSuffixIcon = props.extendSuffixIcon, disabled = props.disabled, dropdownClassName = props.dropdownClassName, removeMenuItemSelectedIcon = props.removeMenuItemSelectedIcon, onDropdownVisibleChange = props.onDropdownVisibleChange, restProps = __rest(props
    // add prefix node
    , ["className", "suffixIcon", "showSearch", "children", "prefixIcon", "extendSuffixIcon", "disabled", "dropdownClassName", "removeMenuItemSelectedIcon", "onDropdownVisibleChange"]);
    // add prefix node
    useEffect(function () {
        if (prefixIcon) {
            addPrefixNode(nodes, prefixIcon);
        }
    }, [prefixIcon]);
    var classes = classNames('frc-select', className, (_a = {},
        _a["frc-select-prefix"] = prefixIcon,
        _a["frc-select-prefix-icon-disabled"] = disabled,
        _a));
    var classesDropdown = classNames('frc-select', dropdownClassName, (_b = {},
        _b["frc-select-prefix-dropdown"] = prefixIcon,
        _b["frc-select-remove-selected-icon"] = removeMenuItemSelectedIcon,
        _b));
    var options = __assign({ className: classes, showSearch: showSearch, dropdownClassName: classesDropdown, suffixIcon: showSearch && openDropdown ? (extendSuffixIcon ? (extendSuffixIcon) : (React.createElement(FiSearch, null))) : (suffixIcon), disabled: disabled, onDropdownVisibleChange: function (open) {
            onDropdownVisibleChange && onDropdownVisibleChange(open);
            setOpenDropdown(open);
        } }, restProps);
    return (React.createElement("div", { ref: nodes, className: "frc-select-container" },
        React.createElement(Select, __assign({}, options), children)));
};
// normal
FRCSelect.defaultProps = {
    disabled: false,
    listHeight: 200,
    showSearch: false,
    showArrow: true,
    clearIcon: React.createElement(FiX, null),
    prefixIcon: null,
    menuItemSelectedIcon: React.createElement(FiCheck, null),
    removeMenuItemSelectedIcon: false,
};
export default FRCSelect;
