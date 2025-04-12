import { TiktokResponseCommon } from './config.response';

interface UpdateStock {
  failed_skus: Array<any>;
}

interface DeactiveProduct {
  failed_product_ids: string[];
  failed_reasons: Array<any>;
}

interface ActiveProduct {
  failed_product_ids: string[];
  failed_reasons: Array<any>;
}

interface Categories {
  categories: Array<any>;
}

interface SizeChart {
  is_supported: boolean;
  is_required: boolean;
}

interface COD {
  is_supported: boolean;
}

interface PackageDimension {
  is_required: boolean;
}

interface ProductCertification {
  id: string;
  name: string;
  is_required: boolean;
  same_image_url: string;
}
interface CategoryRules {
  product_certifications: Array<ProductCertification>;
  size_chart: SizeChart;
  cod: COD;
  package_dimension: PackageDimension;
}

interface UploadImage {
  height: number;
  width: number;
  uri: string;
  url: string;
  use_case: string; //The usage scenarios include MAIN_IMAGE DESCRIPTION_IMAGE ATTRIBUTE_IMAGE CERTIFICATION_IMAGE SIZE_CHART_IMAGE
}

interface Brands {
  brands: Array<any>;
}

interface Attributes {
  attributes: Array<any>;
}

interface ProductSearchData {
  total_count: number;
  products: TikTokProduct[];
  next_page_token?: string;
}

interface TikTokProduct {
  id: string;
  title: string;
  status: string;
  skus: TikTokSku[];
  sales_regions: string[];
  create_time: number;
  update_time: number;
  product_sync_fail_reasons?: string[];
  is_not_for_sale: boolean;
  recommended_categories?: RecommendedCategory[];
  listing_quality_tier?: string;
  integrated_platform_statuses?: IntegratedPlatformStatus[];
  audit?: {
    status: string;
  };
}

interface TikTokSku {
  id: string;
  seller_sku: string;
  price: {
    currency: string;
    tax_exclusive_price: string;
    sale_price: string;
  };
  inventory: TikTokInventory[];
  list_price: {
    amount: string;
    currency: string;
  };
  external_list_prices?: ExternalListPrice[];
}

interface TikTokInventory {
  warehouse_id: string;
  quantity: number;
}

interface ExternalListPrice {
  source: string;
  amount: string;
  currency: string;
}

interface RecommendedCategory {
  id: string;
  local_name: string;
}

interface IntegratedPlatformStatus {
  platform: string;
  status: string;
}

type ResponseUpdateStock = TiktokResponseCommon<UpdateStock>;
type ResponseDeactiveProduct = TiktokResponseCommon<DeactiveProduct>;
type ResponseActiveProduct = TiktokResponseCommon<ActiveProduct>;
type ResponseCategories = TiktokResponseCommon<Categories>;
type ResponseCategoryRules = TiktokResponseCommon<CategoryRules>;
type ResponseBrands = TiktokResponseCommon<Brands>;
type ResponseAttributes = TiktokResponseCommon<Attributes>;
type ResponseUploadImage = TiktokResponseCommon<UploadImage>;
type ResponseProductSearchData = TiktokResponseCommon<ProductSearchData>;

export {
  ResponseUpdateStock as TiktokResponseUpdateStock,
  ResponseActiveProduct as TiktokResponseActiveProduct,
  ResponseDeactiveProduct as TiktokResponseDeactiveProduct,
  ResponseCategories as TiktokResponseCategories,
  ResponseCategoryRules as TiktokResponseCategoryRules,
  ResponseBrands as TiktokResponseBrands,
  ResponseAttributes as TiktokResponseAttributes,
  ResponseUploadImage as TiktokResponseUploadImage,
  ResponseProductSearchData as TiktokResponseProductSearchData,
};
