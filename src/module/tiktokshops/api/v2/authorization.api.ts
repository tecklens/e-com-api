import { TiktokConfig } from '../../dto/request/config.request';
import {TIKTOK_END_POINT_AUTH, TIKTOK_PATH_202309, TIKTOK_PATH_202502} from '../../common/constant';
import * as TiktokHelper from '../../common/helper';
import { TiktokResponseAccessToken, TiktokResponseAuthorized, TiktokResponseRefreshToken } from '../../dto/response/config.response';

/**
 * @param config - Tiktok API configuration.
 * @param path - Tiktok API endpoint path.
 * @returns {Promise<TiktokResponse>} - Response of the Tiktok API endpoint.
 */
async function requestTiktokAPI(config: TiktokConfig, path: string): Promise<any> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter(config, timestamp);
  const url = TiktokHelper.genURLWithSignature(path, commonParam, config);
  return TiktokHelper.httpGet(url, config);
}

/**
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseAuthorized>} - Response of get authorized shop.
 */
export function getAuthorizedShop(config: TiktokConfig): Promise<TiktokResponseAuthorized> {
  return requestTiktokAPI(config, TIKTOK_PATH_202309.AUTHORIZED_SHOP);
}

/**
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseRefreshToken>} - Response of refreshing token.
 */
export function refreshToken(config: TiktokConfig): Promise<TiktokResponseRefreshToken> {
  const { appKey, appSecret } = config;
  const grantType = 'refresh_token';
  if (!config.refreshToken) throw new Error('Refresh token not found')
  const queryParams = new URLSearchParams({
    app_key: appKey,
    app_secret: appSecret,
    grant_type: grantType,
    refresh_token: config.refreshToken,
  });
  const url = `${TIKTOK_END_POINT_AUTH}${TIKTOK_PATH_202309.REFRESH_TOKEN}?${queryParams}`;

  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param authCode
 * @param config
 * @returns
 */
export function fetchTokenWithTiktokAuthCode(authCode: string, config: TiktokConfig): Promise<TiktokResponseAccessToken> {
  const { appKey, appSecret } = config;
  const grantType = 'authorized_code';
  const queryParams = new URLSearchParams({
    app_key: appKey,
    auth_code: authCode,
    app_secret: appSecret,
    grant_type: grantType,
  });
  const url = `${TIKTOK_END_POINT_AUTH}${TIKTOK_PATH_202309.FETCH_TOKEN}?${queryParams}`;

  return TiktokHelper.httpGet(url, config);
}
