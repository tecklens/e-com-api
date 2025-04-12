import {TIKTOK_PATH_202309, TIKTOK_PATH_202502, TIKTOK_PATH_PLACEHOLDER} from '../../common/constant';
import * as TiktokHelper from '../../common/helper';
import { TiktokConfig } from '../../dto/request/config.request';
import { TiktokRequestActiveProduct, TiktokRequestCreateProduct, TiktokRequestDeactiveProduct } from '../../dto/request/product.request';
import {
  TiktokResponseActiveProduct,
  TiktokResponseAttributes,
  TiktokResponseBrands,
  TiktokResponseCategories,
  TiktokResponseCategoryRules,
  TiktokResponseDeactiveProduct, TiktokResponseProductSearchData,
  TiktokResponseUploadImage,
} from '../../dto/response/product.response';
import {commonParameter3} from "../../common/helper";

/**
 * Fetches the list of categories.
 * @param {TiktokConfig} config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseCategories>} The response containing the list of categories.
 */
export async function getCategories(config: TiktokConfig): Promise<TiktokResponseCategories> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}`;
  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.CATEGORIES, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 * Fetches the list of category rules.
 * @param {string} categoryId - Category ID.
 * @param {TiktokConfig} config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseCategoryRules>} The response containing the list of category rules.
 */
export async function getCategoryRules(categoryId: string, config: TiktokConfig): Promise<TiktokResponseCategoryRules> {
  if (!categoryId) {
    throw new Error('Invalid input: categoryId are required');
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}`;
  const pathGetCategoryRule = TiktokHelper.replacePlaceholder(
    TIKTOK_PATH_202309.CATEGORY_RULE,
    TIKTOK_PATH_PLACEHOLDER.CATEGORY,
    categoryId,
  );
  const url = TiktokHelper.genURLWithSignature(pathGetCategoryRule, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param categoryId - Category ID.
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseBrands>} - The response containing the list of brands.
 */
export async function getBrands(categoryId: string, config: TiktokConfig): Promise<TiktokResponseBrands> {
  if (!categoryId) {
    throw new Error('Invalid input: categoryId are required');
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}&category_id=${categoryId}&page_size=100`;
  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.BRANDS, commonParam, config);
  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param categoryId - Category ID.
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseAttributes>} - The response containing the list of attributes.
 */
export async function getAttributes(categoryId: string, config: TiktokConfig): Promise<TiktokResponseAttributes> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}`;

  const pathGetAttributes = TiktokHelper.replacePlaceholder(TIKTOK_PATH_202309.ATTRIBUTES, TIKTOK_PATH_PLACEHOLDER.CATEGORY, categoryId);
  const url = TiktokHelper.genURLWithSignature(pathGetAttributes, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

export async function uploadProductImage(imagePath: string, config: TiktokConfig): Promise<TiktokResponseUploadImage> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}`;

  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.PRODUCT_IMAGE, commonParam, config);

  const formData = new FormData();
  formData.append('data', imagePath);

  const headers = TiktokHelper.getHeaders(config, 'multipart/form-data');
  return TiktokHelper.httpPost(url, formData, headers);
}

/**
 *
 * @param productIds - Product IDs.
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseActiveProduct>}
 */
export async function activeProduct(productIds: string[], config: TiktokConfig): Promise<TiktokResponseActiveProduct> {
  if (!productIds) {
    throw new Error('Invalid input: productIds are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);

  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.ACTIVE_PRODUCT, commonParam, config);

  const body: TiktokRequestActiveProduct = {
    product_ids: productIds,
  };

  const headers = TiktokHelper.getHeaders(config);

  return TiktokHelper.httpPost(url, body, headers);
}

/**
 *
 * @param productIds - Product IDs.
 * @param config - Tiktok API configuration.
 * @returns {Promise<TiktokResponseDeactiveProduct>}
 */
export async function deactiveProduct(productIds: string[], config: TiktokConfig): Promise<TiktokResponseDeactiveProduct> {
  if (!productIds) {
    throw new Error('Invalid input: productIds are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);

  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.DEACTIVE_PRODUCT, commonParam, config);

  const body: TiktokRequestDeactiveProduct = {
    product_ids: productIds,
  };

  const headers = TiktokHelper.getHeaders(config);

  return TiktokHelper.httpPost(url, body, headers);
}

/**
 *
 * @param productId - Product ID.
 * @param config - Tiktok API configuration.
 * @returns {Promise<any>}
 */
export async function getProductDetail(productId: string, config: TiktokConfig): Promise<any> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}&product_id=${productId}`;
  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.PRODUCT_DETAIL, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 *
 * @param config - Tiktok API configuration.
 * @returns {Promise<any>}
 */
export async function getListProduct(params: {page_size: number;page_token?: string}, config: TiktokConfig): Promise<TiktokResponseProductSearchData> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter3(config, {page_size: params.page_size, page_token: params.page_token}, timestamp);
  const url = TiktokHelper.genURLWithSignatureV2(TIKTOK_PATH_202309.PRODUCT_LIST, commonParam, config);

  const headers = TiktokHelper.getHeaders(config);
  return TiktokHelper.httpPost(url, {}, headers);
}

/**
 * Create Product
 * @param {TiktokRequestCreateProduct} payload
 * @param {TiktokConfig} config
 * @return {Promise<any>}
 */
export async function createProduct(payload: TiktokRequestCreateProduct, config: TiktokConfig) {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);
  const body = payload;
  const url = TiktokHelper.genURLWithSignature(TIKTOK_PATH_202309.CREATE_PRODUCT, commonParam, config);

  const headers = TiktokHelper.getHeaders(config);
  return TiktokHelper.httpPost(url, body, headers);
}
