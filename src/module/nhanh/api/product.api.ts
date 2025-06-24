import { NhanhConfig, NhanhResponseProductSearchData } from '../dto';
import * as NhanHelper from '../common/helper'
import { NHANH_PATH } from '../common/constant';
import { NhanhProductSearchRequest } from '../dto';

/**
 *
 * @param params - NhanhProductSearchRequest
 * @param config - Nhanh API configuration.
 * @returns {Promise<any>}
 */
export async function getListProduct(params: NhanhProductSearchRequest, config: NhanhConfig): Promise<NhanhResponseProductSearchData> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = NhanHelper.commonParameter(config, params);

  const headers = NhanHelper.getHeaders(config);
  return NhanHelper.httpPost(NHANH_PATH.PRODUCT_LIST, commonParam, headers);
}