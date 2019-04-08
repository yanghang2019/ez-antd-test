// import { GetUploadInfo, TAdminUploadInfo } from "genServices/AdminHomepageService";

export function getToken(cb?: (info) => void) {
	const errInfo = {
		baseUrl: "",
		token: ""
	};
	const errCb = (err: any) => {
		console.warn(`获取七牛的upload token错误, 错误信息是\n`);
		console.warn(err);

		if (cb) {
			cb(errInfo);
		}

		return errInfo;
	};

	// 调去后端接口部分
	// return GetUploadInfo()
	// 	.then(data => {
	// 		if (cb) {
	// 			cb(data);
	// 		}
	// 		return data;
	// 	}, errCb)
	// 	.catch(errCb);

	return errCb;
}

export default getToken;
