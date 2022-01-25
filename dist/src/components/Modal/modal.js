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
import Modal from 'antd/es/modal';
import Button from '../Button/index';
export var ModalFooter = function (props) {
    var onOk = props.onOk, onCancel = props.onCancel, confirmLoading = props.confirmLoading;
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { type: "gray", onClick: onCancel, style: { width: 60 } }, "\u53D6\u6D88"),
        React.createElement(Button, { loading: confirmLoading, type: "primary", onClick: onOk, style: { width: 120 } }, "\u786E\u5B9A")));
};
export var FRCModal = function (props) {
    var className = props.className, children = props.children, footer = props.footer, restProps = __rest(props, ["className", "children", "footer"]);
    var classes = classNames('frc-modal', className, {});
    var options = __assign({ className: classes, footer: footer || React.createElement(ModalFooter, __assign({}, __assign({}, restProps))) }, restProps);
    // main
    return (React.createElement(Modal, __assign({}, options), children));
};
// normal
FRCModal.defaultProps = {
    width: 320,
    maskClosable: false,
    keyboard: false,
};
export default FRCModal;
