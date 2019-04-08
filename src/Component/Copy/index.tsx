import { message } from "antd";
import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const styles = require("./styles.scss");

/**
 *
 * @param props {text:copy内容，msg提示内容，content：需要展示的内容，如果没有默认用text}
 */
export function Copy(props: { text: string; msg: string; content?: string }) {
	return (
		<CopyToClipboard text={props.text} onCopy={() => message.success(`${props.msg}: 复制成功!`, 2)}>
			<span className={styles.mln}>{props.content || props.text}</span>
		</CopyToClipboard>
	);
}
export function CopyFloat(props: { text: string; title: string; href?: string; content?: string }) {
	return (
		<CopyToClipboard
			text={props.text}
			onCopy={() => message.success(`${props.title}: 复制成功!`, 2)}
		>
			{props.content && !props.href ? (
				<span className={styles.mln}>{props.content}</span>
			) : (
				<a
					style={{ color: props.content ? "" : "orange" }}
					type="primary"
					target="_blank"
					href={props.href ? props.href : "javascript:void(0)"}
				>
					{props.href ? props.text : "复制"}
				</a>
			)}
		</CopyToClipboard>
	);
}
