import { NhanhResponseCommon } from './config.response';

interface ParentAttribute {
  id: number;
  name: string;
}

interface Attribute {
  attributeName: string;
  id: number;
  name: string;
  order: number;
  parent?: ParentAttribute; // optional vì có thể không có
}

export interface NhanhProductInventory {
  remain: number;           // số lượng tồn kho
  shipping: number;         // số lượng đang giao hàng
  holding: number;          // số lượng đang tạm giữ
  damage: number;           // số lượng lỗi
  available: number;        // số lượng có thể bán
  warranty: number;         // số lượng bảo hành
  warrantyHolding: number;  // số lượng đang bảo hành
}

interface NhanhProduct {
  idNhanh: bigint;
  categoryId: number; // ID danh mục sản phẩm trên Nhanh.vn
  internalCategoryId: number; // ID danh mục nội bộ trên Nhanh.vn
  parentId: number; // -1 = Sản phẩm độc lập, hoặc -2 = Sản phẩm cha, hoặc -10 = Tất cả sản phẩm con
  code: string;
  name: string;
  otherName: string; // Tên khác của sản phẩm
  importPrice: number; // double
  oldPrice: number; // double
  price: number; // double
  wholesalePrice: number; // double
  vat: number; // % thuế giá trị gia tăng (VD: 10)
  image: string;
  images: any[];
  status: string; //  Active | Inactive | OutOfStock
  previewLink: string;
  showHot: number; // (Giá trị 0 or 1) Sản phẩm được đánh dấu là sản phẩm hot
  showNew: number; // (Giá trị 0 or 1) Sản phẩm được đánh dấu là sản phẩm mới
  showHome: number; // (Giá trị 0 or 1) Sản phẩm được đánh dấu hiển thị ở trang chủ
  width: number;
  height: number;
  warrantyAddress: string;
  warrantyPhone: string;
  warranty: number; // Số tháng bảo hành
  length: number; // in cm
  shippingWeight: number; // in gram
  createdDateTime: Date; // định dạng yyyy-mm-dd hh:mm:ss
  brandId: number;
  brandName: string;
  typeId: number;
  typeName: string;
  avgCost: number; // Giá vốn sản phẩm double
  countryName: string;
  unit: string;
  importType: string;
  importTypeLabel: string;
  inventory?: NhanhProductInventory[];
  attributes?: Record<string, Attribute>[];
  updatedAt: number; // Ngày cập nhật sản phẩm (định dạng timestamp)
}

interface ProductSearchData {
  totalPages: number;
  products: NhanhProduct[];
}

type ResponseProductSearchData = NhanhResponseCommon<ProductSearchData>;

export {
  ResponseProductSearchData as NhanhResponseProductSearchData
}