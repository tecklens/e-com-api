import crypto from "crypto";
import {TIKTOK_END_POINT} from './constant';
import {TiktokConfig} from '../dto/request/config.request';
import axios, {AxiosResponse} from 'axios';

export function commonParameter(config, timestamp) {
    const {appKey} = config;
    const commonParam = '?app_key=' + appKey + '&sign=' + '' + '&timestamp=' + timestamp;

    return commonParam;
}

function commonParameter3(config, params, timestamp) {
    const { appKey, shopId, shopCipher } = config;

    // Gom tất cả param lại thành object
    const rawParams = {
        app_key: appKey,
        timestamp: String(timestamp),
        shop_id: shopId,
        shop_cipher: shopCipher,
        ...params // ví dụ: page_size, page_token
    };

    // Loại bỏ undefined/null
    const filteredParams = Object.fromEntries(
        Object.entries(rawParams).filter(([_, v]) => v !== undefined && v !== null)
    );

    // Sắp xếp theo key alphabet
    const sortedKeys = Object.keys(filteredParams).sort();
    const sortedParams = sortedKeys.map(key => `${key}=${filteredParams[key]}`).join('&');
    const paramString = sortedKeys
        .map(key => `${key}${filteredParams[key]}`)
        .join("");

    return {
        sortedParams,
        paramString,
        rawParams: filteredParams // dùng để tính sign
    };
}

function commonParameter2(config, timestamp) {
    const {appKey, shopId, shopCipher} = config;
    const commonParam =
        '?app_key=' + appKey + '&sign=' + '' + '&timestamp=' + timestamp + '&shop_id=' + shopId + '&shop_cipher=' + shopCipher + '&version=202309';

    return commonParam;
}

function objKeySort(obj) {
    const newKey = Object.keys(obj).sort();
    const newObj = {};
    for (let i = 0; i < newKey.length; i++) {
        newObj[newKey[i]] = obj[newKey[i]];
    }
    return newObj;
}

function signRequest(params: Record<string, string>, path: string, config: Record<string, any>, body: Record<string, any>) {
    const {appSecret} = config;
    delete params['sign'];
    delete params['access_token'];
    const sortParam = objKeySort(params);
    let signstring = appSecret + path;

    for (const key in sortParam) {
        signstring = signstring + key + sortParam[key];
    }
    signstring = signstring + (!body ? appSecret : JSON.stringify(body) + appSecret);

    const hmac = crypto.createHmac("sha256", appSecret);
    hmac.update(signstring, 'utf-8');
    return hmac.digest("hex");
}

function parseParamsURL(url) {
    const params = {};
    url.searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

function genURLWithSignature(path, commonParam, config, body?) {
    const url = new URL(TIKTOK_END_POINT + path + commonParam);
    const params = parseParamsURL(url);
    const signature2 = signRequest(params, path, config, body);
    url.searchParams.set('sign', signature2);
    return url.toString();
}

function genURLWithSignatureV2(path, commonParam2: {sortedParams: string,paramString: string }, config, body?) {
    const url = new URL(TIKTOK_END_POINT + path + '?' + commonParam2.sortedParams);
    const params = parseParamsURL(url);
    const signature2 = signRequest(params, path, config, body);
    url.searchParams.set('sign', signature2);
    return url.toString();
}

function getTimestampHoursAgo(hours: number): number {
    const oldDate = new Date();
    oldDate.setMilliseconds(0);
    return Math.floor((oldDate.getTime() - hours * 60 * 60 * 1000) / 1000);
}

export function replacePackageId(path: string, packageId: string): string {
    return path.replace('{package_id}', packageId);
}

function replacePlaceholder(path: string, placeholder: string, replacement: string): string {
    return path.replace(`{${placeholder}}`, replacement);
}

function handleError(err: any) {
    return err.response ? err.response.data : {error: 'Unknown error'};
}

function getHeaders(config: TiktokConfig, contentType = 'application/json') {
    return {
        'content-type': contentType,
        'x-tts-access-token': config.accessToken,
    };
}

async function httpPost(url: string, body: any, headers: any) {
    const res: AxiosResponse = await axios.post(url, body, {
        headers,
    });
    return res.data;
}

async function httpGet(url: string, config: TiktokConfig) {
    const res: AxiosResponse = await axios.get(url, {
        headers: getHeaders(config),
    });
    return res.data;
}

function getTimestamp() {
    return new Date().getTime();
}

function isAccessTokenValid(time: any): boolean {
    if (time.toString().length === 13) {
        time = time / 1000;
    }
    const now = Math.floor(Date.now() / 1000);
    return time > now;
}

function isTokenExpired(time: any): boolean {
    if (time.toString().length === 13) {
        time = time / 1000;
    }
    const now = Math.floor(Date.now() / 1000);

    // If expiration time is less than or equal to current time, it's expired
    return time <= now;
}

export {
    httpGet,
    httpPost,
    getHeaders,
    getTimestamp,
    commonParameter2,
    commonParameter3,
    objKeySort,
    signRequest,
    parseParamsURL,
    genURLWithSignature,
    genURLWithSignatureV2,
    getTimestampHoursAgo,
    replacePlaceholder,
    isAccessTokenValid,
    isTokenExpired,
};
