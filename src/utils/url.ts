const testEnvHostReg = /65emall\.net|127\.0|192\.168|localhost/i;

export function isUAT(): boolean {
	return testEnvHostReg.test(location.hostname);
}

export function qiniuUrl(): string {
	return isUAT() ? "http://7xiata.com1.z0.glb.clouddn.com/" : "http://i.ezbuy.sg/";
}

export function uploadQiniuUrl(): string {
	return isUAT() ? "//up.qiniup.com" : "//up-as0.qiniup.com";
}

export default qiniuUrl;
