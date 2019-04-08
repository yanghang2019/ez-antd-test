"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getToken(cb) {
    const errInfo = {
        baseUrl: "",
        token: ""
    };
    const errCb = (err) => {
        console.warn(`获取七牛的upload token错误, 错误信息是\n`);
        console.warn(err);
        if (cb) {
            cb(errInfo);
        }
        return errInfo;
    };
    return errCb;
}
exports.getToken = getToken;
exports.default = getToken;
