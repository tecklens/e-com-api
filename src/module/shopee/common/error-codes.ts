export enum ShopeeErrorCodes {
  err_data = 'err_data', // cannot accept your own offer
  // There is no access_token in query. | Invalid partner_id. | There is no partner_id in query. | There is no sign in query. | no timestamp
  // Invalid timestamp |
  error_param = 'err_data',
  // Invalid access_token. | No permission to current api. | Your shop can not use model level dts
  error_auth = 'err_data',
  // Wrong sign.
  error_sign = 'error_sign',
  // Our system is taking some time to respond, please try later.
  error_system_busy = 'error_system_busy'
}