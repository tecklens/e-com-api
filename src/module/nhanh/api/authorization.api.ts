import { NhanhConfig } from '../dto';
import { NHANH_END_POINT, NHANH_PATH } from '../common/constant';
import * as NhanhHelper from '../common/helper'
import { NhanhResponseAccessToken } from '../dto/response/config.response';

/**
 *
 * @param redirectURL
 * @param config
 * @returns
 */
function generateAuthLink(config: NhanhConfig) {
  const { version, appId, returnLink } = config;

  const commonParam = `?version=${version}&appId=${appId}&returnLink=${returnLink}`;

  const url = `${NHANH_END_POINT}${NHANH_PATH.GENERATE_AUTH_LINK}${commonParam}`;

  return { url, redirect: returnLink };
}

/**
 *
 * @param authCode
 * @param config
 * @returns
 */
function fetchTokenWithTiktokAuthCode(authCode: string, config: NhanhConfig): Promise<NhanhResponseAccessToken> {
  const { appId, returnLink, appSecret } = config;
  const queryParams = new URLSearchParams({
    appId: appId,
    version: authCode,
    returnLink,
    accessCode: authCode,
    secretKey: appSecret,
  });
  const url = `${NHANH_END_POINT}${NHANH_PATH.AUTHORIZED_SHOP}?${queryParams}`;

  return NhanhHelper.httpGet(url, config);
}

export {
  fetchTokenWithTiktokAuthCode as fetchTokenWithTiktokAuthCodeNhanh,
  generateAuthLink as generateAuthLinkNhanh,
}