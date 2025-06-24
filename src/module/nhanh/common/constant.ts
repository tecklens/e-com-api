const END_POINT = 'https://nhanh.vn';

enum PATH {
  AUTHORIZED_SHOP = '/oauth/access_token',
  GENERATE_AUTH_LINK = '/oauth',
  PRODUCT_LIST = '/api/product/search',
}

export {
  PATH as NHANH_PATH,
  END_POINT as NHANH_END_POINT,
};
