"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const React = require("react");
const getToken_1 = require("utils/getToken");
const url_1 = require("utils/url");
const uploadURL = url_1.uploadQiniuUrl();
class Upload extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChange = (info) => {
            const { onChange } = this.props;
            const { status, name, response } = info.file;
            const { prefixURL } = this.state;
            if (status === "done") {
                this.setState({
                    uploading: false,
                    fileName: name
                });
                const url = `${prefixURL}${response.key}`;
                onChange({
                    url,
                    key: response.key
                });
                antd_1.message.success(`${name} upload success.`);
            }
            else if (status === "error") {
                this.setState({
                    uploading: false
                });
                antd_1.message.error(`${name} upload fail.`);
            }
            else if (status === "uploading") {
                this.setState({
                    uploading: true
                });
            }
        };
        this.state = {
            prefixURL: "",
            token: "",
            uploading: false,
            fileName: ""
        };
    }
    componentDidMount() {
        getToken_1.getToken(({ baseUrl, token }) => {
            this.setState({
                prefixURL: baseUrl,
                token
            });
        });
    }
    render() {
        const { text, hideFileName = false } = this.props;
        const { token, uploading, fileName } = this.state;
        return (React.createElement(antd_1.Upload, { action: uploadURL, data: { token }, showUploadList: false, onChange: this.onChange },
            React.createElement(antd_1.Button, { loading: uploading },
                React.createElement(antd_1.Icon, { type: "upload" }),
                text),
            !hideFileName &&
                fileName && React.createElement("span", { style: { marginLeft: 10, fontSize: 12 } }, fileName)));
    }
}
Upload.defaultProps = {
    text: "Click to upload"
};
exports.Upload = Upload;
