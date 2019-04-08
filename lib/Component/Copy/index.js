"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const React = require("react");
const react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
const styles = require("./styles.scss");
function Copy(props) {
    return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: props.text, onCopy: () => antd_1.message.success(`${props.msg}: 复制成功!`, 2) },
        React.createElement("span", { className: styles.mln }, props.content || props.text)));
}
exports.Copy = Copy;
function CopyFloat(props) {
    return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: props.text, onCopy: () => antd_1.message.success(`${props.title}: 复制成功!`, 2) }, props.content && !props.href ? (React.createElement("span", { className: styles.mln }, props.content)) : (React.createElement("a", { style: { color: props.content ? "" : "orange" }, type: "primary", target: "_blank", href: props.href ? props.href : "javascript:void(0)" }, props.href ? props.text : "复制"))));
}
exports.CopyFloat = CopyFloat;
