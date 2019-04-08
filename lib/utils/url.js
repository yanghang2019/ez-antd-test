"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testEnvHostReg = /65emall\.net|127\.0|192\.168|localhost/i;
function isUAT() {
    return testEnvHostReg.test(location.hostname);
}
exports.isUAT = isUAT;
function qiniuUrl() {
    return isUAT() ? "http://7xiata.com1.z0.glb.clouddn.com/" : "http://i.ezbuy.sg/";
}
exports.qiniuUrl = qiniuUrl;
function uploadQiniuUrl() {
    return isUAT() ? "//up.qiniup.com" : "//up-as0.qiniup.com";
}
exports.uploadQiniuUrl = uploadQiniuUrl;
exports.default = qiniuUrl;
