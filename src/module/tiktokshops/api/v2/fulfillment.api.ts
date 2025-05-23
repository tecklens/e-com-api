import { TIKTOK_DOCUMENT_TYPE, TIKTOK_PATH_202309 } from '../../common/constant';
import * as TiktokHelper from '../../common/helper';
import { TiktokConfig } from '../../dto/request/config.request';
import { TiktokRequestShipPackage } from '../../dto/request/fulfillment.request';
import { TiktokResponsePackageTimeSlot } from '../../dto/response/fulfillment.response';

/**
 * Detail Package
 * @param packageId - Package ID.
 * @param payload - Payload for shipping package.
 * @param config - Tiktok API configuration.
 * @returns Promise of shipping package.
 */
export async function detailPackage(packageId: string, config: TiktokConfig): Promise<any> {
  if (!packageId) {
    throw new Error('Invalid input: packageId are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);
  const pathTimeSlot = TiktokHelper.replacePackageId(TIKTOK_PATH_202309.PACKAGE_DETAIL, packageId);

  const url = TiktokHelper.genURLWithSignature(pathTimeSlot, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 * Get Package Time Slots
 * @param packageId
 * @param config
 * @returns
 */
export async function getPackageTimeSlots(packageId: string, config: TiktokConfig): Promise<TiktokResponsePackageTimeSlot> {
  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);
  const pathTimeSlot = TiktokHelper.replacePackageId(TIKTOK_PATH_202309.PACKAGE_TIME_SLOT, packageId);

  const url = TiktokHelper.genURLWithSignature(pathTimeSlot, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}

/**
 * Ship Package
 * @param packageId - Package ID.
 * @param payload - Payload for shipping package.
 * @param config - Tiktok API configuration.
 * @returns Promise of shipping package.
 */
export async function shipPackage(packageId: string, payload: TiktokRequestShipPackage, config: TiktokConfig): Promise<any> {
  if (!packageId) {
    throw new Error('Invalid input: packageId are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = TiktokHelper.commonParameter2(config, timestamp);
  const pathTimeSlot = TiktokHelper.replacePackageId(TIKTOK_PATH_202309.SHIP_PACKAGE, packageId);

  const url = TiktokHelper.genURLWithSignature(pathTimeSlot, commonParam, config);

  const body: TiktokRequestShipPackage = {
    handover_method: payload.handover_method,
    pickup_slot: {
      start_time: payload.pickup_slot.start_time,
      end_time: payload.pickup_slot.end_time,
    },
  };

  const headers = TiktokHelper.getHeaders(config);

  return TiktokHelper.httpPost(url, body, headers);
}

export async function getPackageShippingDocument(packageId: string, documentType: TIKTOK_DOCUMENT_TYPE, config: TiktokConfig) {
  if (!packageId || !documentType) {
    throw new Error('Invalid input: packageId and documentType are required');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const commonParam = `${TiktokHelper.commonParameter2(config, timestamp)}&document_type=${documentType}`;

  const pathShippingDocument = TiktokHelper.replacePackageId(TIKTOK_PATH_202309.PACKAGE_SHIPPING_DOCUMENT, packageId);

  const url = TiktokHelper.genURLWithSignature(pathShippingDocument, commonParam, config);

  return TiktokHelper.httpGet(url, config);
}
