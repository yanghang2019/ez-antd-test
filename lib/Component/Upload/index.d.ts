import { UploadChangeParam } from "antd/lib/upload";
import * as React from "react";
export interface UploadResp {
    key: string;
    url: string;
}
interface UploadProps {
    hideFileName?: boolean;
    text?: string;
    onChange: (url: UploadResp) => void;
}
interface UploadState {
    prefixURL: string;
    token: string;
    uploading: boolean;
    fileName: string;
}
export declare class Upload extends React.PureComponent<UploadProps, UploadState> {
    static defaultProps: Partial<UploadProps>;
    constructor(props: any);
    onChange: (info: UploadChangeParam) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
