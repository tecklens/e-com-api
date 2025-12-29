interface ResponseGetAccessToken {
  access_token: string;
  refresh_token: string;
  expire_in: number;
  message: string;
  request_id: string;
  error: string;
  merchant_id_list: number[];
  shop_id_list: number[];
}

interface ResponseRefreshAccessToken extends ResponseGetAccessToken {
  shop_id: string;
  partner_id: string;
}

interface ShopProfile {
  shop_logo: string;
  description: string;
  shop_name: string;
  invoice_issuer: string;
}

interface ResponseCommon<T> {
  request_id: string;
  error: string;
  message: string;
  response: T;
}

interface ResponseShopProfile extends ResponseCommon<ShopProfile> {}

export {
  ResponseCommon as ShopeeResponseCommon,
  ResponseGetAccessToken as ShopeeResponseGetAccessToken,
  ResponseRefreshAccessToken as ShopeeResponseRefreshAccessToken,
  ResponseShopProfile as ShopeeResponseShopProfile,
};
