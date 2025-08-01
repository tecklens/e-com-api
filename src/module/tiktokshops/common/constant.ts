enum WEBHOOK_TYPE {
  ORDER_STATUS = 1,
  RETURN_STATUS = 2,
  CANCEL_STATUS = 3,
  ADDRESS_UPDATE = 4,
  PACKAGE_UPDATE = 5,
  PRODUCT_STATUS = 6,
  SELLER_DEAUTHORIZE = 7,
  AUTH_EXPIRE = 8,
}

enum PRODUCT_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

//staus-product// 1-draft、2-pending、3-failed(initial creation)、4-live、5-seller_deactivated、6-platform_deactivated、7-freeze 8-deleted

enum REVERSE_ORDER_STATUS {
  AFTERSALE_APPLYING = 1,
  AFTERSALE_REJECT_APPLICATION = 2,
  AFTERSALE_RETURNING = 3,
  AFTERSALE_BUYER_SHIPPED = 4,
  AFTERSALE_SELLER_REJECT_RECEIVE = 5,
  AFTERSALE_SUCCESS = 50,
  CANCEL_SUCCESS = 51,
  CLOSED = 99,
  COMPLETE = 100,
}

enum REVERSE_USER {
  BUYER = 1,
  SELLER = 2,
  OPERATOR = 3,
  SYSTEM = 4,
}

enum USER {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
  SYSTEM = 'SYSTEM',
}

enum ORDER_STATUS {
  UNPAID = 100,
  ON_HOLD = 105,
  AWAITING_SHIPMENT = 111,
  AWAITING_COLLECTION = 112,
  PARTIALLY_SHIPPING = 114,
  IN_TRANSIT = 121,
  DELIVERED = 122,
  COMPLETED = 130,
  CANCELLED = 140,
}

enum REVERSE_TYPE {
  CANCEL = 1,
  REFUND_ONLY = 2,
  RETURN_AND_REFUND = 3,
  REQUEST_CANCEL = 4,
}

enum REVERSE_EVENT_TYPE {
  ORDER_REQUEST_CANCEL = 'ORDER_REQUEST_CANCEL',
  ORDER_RETURN = 'ORDER_RETURN',
  ORDER_REFUND = 'ORDER_REFUND',
}

const END_POINT = 'https://open-api.tiktokglobalshop.com';
const END_POINT_UAT = 'https://open-api-sandbox.tiktokglobalshop.com';
const END_POINT_AUTH = 'https://auth.tiktok-shops.com';
const END_POINT_AUTH_202502 = 'https://open.tiktokapis.com';
const END_POINT_AUTH_UAT = 'https://auth-sandbox.tiktok-shops.com';
const END_POINT_AUTH_2309 = 'https://services.tiktokshop.com/open/authorize';
const ALGORITHM = 'sha256';
const DIGEST = 'hex';

enum PATH {
  GENERATE_AUTH_LINK = '/oauth/authorize',
  // FETCH_TOKEN_AUTH = "/api/v2/token/get",
  FETCH_TOKEN_AUTH = '/api/token/getAccessToken',
  REFRESH_TOKEN = '/api/token/refreshToken',
  ORDER_DETAIL = '/api/orders/detail/query',
  ORDER_LIST = '/api/orders/search',
  PRODUCT_LIST = '/api/products/search',
  UPDATE_STOCK = '/api/products/stocks',
  SHIP_ORDER = '/api/order/rts',
  GET_AUTHORIZED = '/api/shop/get_authorized_shop',
  SHIPPING_DOCUMENT = '/api/logistics/shipping_document',
  SHIPPING_INFO = '/api/logistics/ship/get',
  FULFILLMENT_DETAIL = '/api/fulfillment/detail',
  PRODUCT_DETAIL = '/api/products/details',
  REVERSE_LIST = '/api/reverse/reverse_order/list',
  ACTIVE_PRODUCT = '/api/products/activate',
  DEACTIVE_PRODUCT = '/api/products/inactivated_products',
  UPDATE_PRICE = '/api/products/prices',
}

enum PATH_202309 {
  GENERATE_AUTH_LINK = '/open',
  FETCH_TOKEN = '/api/v2/token/get',
  REFRESH_TOKEN = '/api/v2/token/refresh',
  AUTHORIZED_SHOP = '/authorization/202309/shops',
  ORDER_LIST = '/order/202309/orders/search',
  ORDER_DETAIL = '/order/202309/orders',
  PRODUCT_LIST = '/product/202309/products/search',
  PRODUCT_DETAIL = '/product/202309/products/',
  CATEGORIES = '/product/202309/categories',
  CATEGORY_RULE = '/product/202309/categories/{category_id}/rules',
  BRANDS = '/product/2309/brands',
  ATTRIBUTES = '/product/202309/categories/{category_id}/attributes',
  PRODUCT_IMAGE = '/product/202309/images/upload',
  CREATE_PRODUCT = ' /product/202309/products',
  PACKAGE_TIME_SLOT = '/fulfillment/202309/packages/{package_id}/handover_time_slots',
  SHIP_PACKAGE = '/fulfillment/202309/packages/{package_id}/ship',
  PACKAGE_DETAIL = '/fulfillment/202309/packages/{package_id}',
  ACTIVE_PRODUCT = '/product/202309/products/activate',
  DEACTIVE_PRODUCT = '/product/202309/products/deactivate',
  PACKAGE_SHIPPING_DOCUMENT = '/fulfillment/202309/packages/{package_id}/shipping_documents',
  SEARCH_RETURN = '/return_refund/202309/returns/search',
}

enum PATH_202502 {
  FETCH_TOKEN = '/v2/oauth/token',
}

enum DOCUMENT_TYPE {
  PACKING_SLIP = 'PACKING_SLIP', //PDF
  SHIPPING_LABEL = 'SHIPPING_LABEL', //PDF
  SHIPPING_LABEL_PICTURE = 'SHIPPING_LABEL_PICTURE', //PNG
  SHIPPING_LABEL_AND_PACKING_SLIP = 'SHIPPING_LABEL_AND_PACKING_SLIP',
}

enum PATH_PLACEHOLDER {
  CATEGORY = '{category_id}',
  PACKAGE = '{package_id}',
}

enum CODE {
  SUCCESS = 0,
}

export {
  WEBHOOK_TYPE as TIKTOK_WEBHOOK_TYPE,
  REVERSE_TYPE as TIKTOK_REVERSE_TYPE,
  ORDER_STATUS as TIKTOK_ORDER_STATUS,
  PRODUCT_STATUS as TIKTOK_PRODUCT_STATUS,
  REVERSE_ORDER_STATUS as TIKTOK_REVERSE_ORDER_STATUS,
  REVERSE_EVENT_TYPE as TIKTOK_REVERSE_EVENT_TYPE,
  REVERSE_USER as TIKTOK_REVERSE_USER,
  USER as TIKTOK_USER,
  PATH as TIKTOK_PATH,
  PATH_202309 as TIKTOK_PATH_202309,
  PATH_202502 as TIKTOK_PATH_202502,
  PATH_PLACEHOLDER as TIKTOK_PATH_PLACEHOLDER,
  DOCUMENT_TYPE as TIKTOK_DOCUMENT_TYPE,
  CODE as TIKTOK_CODE,
  ALGORITHM as TIKTOK_ALGORITHM,
  DIGEST as TIKTOK_DIGEST,
  END_POINT as TIKTOK_END_POINT,
  END_POINT_UAT as TIKTOK_END_POINT_UAT,
  END_POINT_AUTH as TIKTOK_END_POINT_AUTH,
  END_POINT_AUTH_202502 as TIKTOK_END_POINT_AUTH_2502,
  END_POINT_AUTH_UAT as TIKTOK_END_POINT_AUTH_UAT,
  END_POINT_AUTH_2309 as TIKTOK_END_POINT_AUTH_2309,
};
