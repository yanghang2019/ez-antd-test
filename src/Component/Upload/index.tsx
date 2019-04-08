// import { message, Button, Icon, Upload as UploadAntd } from "antd";
// import { UploadChangeParam } from "antd/lib/upload";
// import * as React from "react";
// import { getToken } from "utils/getToken";
// import { uploadQiniuUrl } from "utils/url";

// export interface UploadResp {
// 	// qiniu key of file
// 	key: string;
// 	// qiniu url of file
// 	url: string;
// }

// interface UploadProps {
// 	hideFileName?: boolean;
// 	text?: string;
// 	onChange: (url: UploadResp) => void;
// }

// interface UploadState {
// 	prefixURL: string;
// 	token: string;
// 	uploading: boolean;
// 	fileName: string;
// }

// const uploadURL = uploadQiniuUrl();

// export class Upload extends React.PureComponent<UploadProps, UploadState> {
// 	static defaultProps: Partial<UploadProps> = {
// 		text: "Click to upload"
// 	};

// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			prefixURL: "",
// 			token: "",
// 			uploading: false,
// 			fileName: ""
// 		};
// 	}

// 	onChange = (info: UploadChangeParam) => {
// 		const { onChange } = this.props;
// 		const { status, name, response } = info.file;
// 		const { prefixURL } = this.state;

// 		if (status === "done") {
// 			this.setState({
// 				uploading: false,
// 				fileName: name
// 			});
// 			const url = `${prefixURL}${response.key}`;
// 			onChange({
// 				url,
// 				key: response.key
// 			});
// 			message.success(`${name} upload success.`);
// 		} else if (status === "error") {
// 			this.setState({
// 				uploading: false
// 			});
// 			message.error(`${name} upload fail.`);
// 		} else if (status === "uploading") {
// 			this.setState({
// 				uploading: true
// 			});
// 		}
// 	};

// 	componentDidMount() {
// 		getToken(({ baseUrl, token }) => {
// 			this.setState({
// 				prefixURL: baseUrl,
// 				token
// 			});
// 		});
// 	}

// 	render() {
// 		const { text, hideFileName = false } = this.props;
// 		const { token, uploading, fileName } = this.state;

// 		return (
// 			<UploadAntd
// 				action={uploadURL}
// 				data={{ token }}
// 				showUploadList={false}
// 				onChange={this.onChange}
// 			>
// 				<Button loading={uploading}>
// 					<Icon type="upload" />
// 					{text}
// 				</Button>
// 				{!hideFileName &&
// 					fileName && <span style={{ marginLeft: 10, fontSize: 12 }}>{fileName}</span>}
// 			</UploadAntd>
// 		);
// 	}
// }
