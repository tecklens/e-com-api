interface ProductSearchRequest {
  /**
   * Phân trang, mặc định là 1
   */
  page?: number;

  /**
   * Số lượng sản phẩm trên 1 trang, mặc định: 100, tối đa: 100
   */
  icpp?: number;

  /**
   * Sắp xếp kết quả. Là mảng kiểu: [Tiêu chí => asc | desc].
   * Mặc định: { id: 'desc' }.
   * Các tiêu chí: id, price, name, inventory
   */
  sort?: Record<'id' | 'price' | 'name' | 'inventory', 'asc' | 'desc'>[];

  /**
   * Tìm sản phẩm theo tên, mã hoặc mã vạch
   */
  name?: string;

  /**
   * Tìm theo ID sản phẩm cha
   * -1 = sản phẩm độc lập, -2 = sản phẩm cha
   */
  parentId?: number;

  /**
   * Tìm theo ID danh mục sản phẩm
   * Bao gồm cả danh mục con nếu có
   */
  categoryId?: number;

  /**
   * Tìm theo trạng thái sản phẩm
   * (Xem bảng mô tả trạng thái sản phẩm)
   */
  status?: string;

  /**
   * Tìm theo giá >=
   */
  priceFrom?: number;

  /**
   * Tìm theo giá <=
   */
  priceTo?: number;

  /**
   * Tìm theo thương hiệu
   */
  brandId?: number;

  /**
   * Tìm theo IMEI
   */
  imei?: string;

  /**
   * Tìm theo sản phẩm hot (1 = có, 0 = không)
   */
  showHot?: number;

  /**
   * Tìm theo sản phẩm mới (1 = có, 0 = không)
   */
  showNew?: number;

  /**
   * Tìm theo sản phẩm hiển thị trên trang chủ (1 = có, 0 = không)
   */
  showHome?: number;

  /**
   * Ngày cập nhật sản phẩm từ ngày (Y-m-d H:i:s)
   * Ví dụ: 2022-05-25 00:00:00
   */
  updatedDateTimeFrom?: string;

  /**
   * Ngày cập nhật sản phẩm đến ngày (Y-m-d H:i:s)
   * Ví dụ: 2022-05-30 23:59:00
   */
  updatedDateTimeTo?: string;
}

export {
  ProductSearchRequest as NhanhProductSearchRequest,
}