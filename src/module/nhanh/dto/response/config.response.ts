interface ResponseCommon<T> {
  code: string | number;
  message: string;
  data: T;
}

interface ResponseAccessToken extends ResponseCommon<object> {
  accessToken: string;
  /*
  Hạn sử dụng accessToken (Y-m-d H:i:s), VD: 2022-09-25 15:30:00.
  * Token sẽ có hạn 1 năm.
  * Hiện Nhanh chưa hỗ trợ refresh token. Hệ thống của bạn cần có cơ chế cảnh báo người dùng để đăng nhập cấp quyền và lấy token mới khi gần hết hạn token cũ.
  */
  expiredDateTime: string;
  businessId: number;
  /*
  * Các kho hàng được phép thao tác theo token. Nếu mảng rỗng thì sẽ được thao tác với toàn bộ các kho hàng.
  */
  depotIds: any[];
  permissions: string;
}

export {
  ResponseCommon as NhanhResponseCommon,
  ResponseAccessToken as NhanhResponseAccessToken,
};
