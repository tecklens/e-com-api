import { TiktokResponseCommon } from './config.response';

export interface ReturnLineItemImageDto {
  url: string;
  width: number;
  height: number;
}

export interface RefundAmountDto {
  currency: string;
  refund_total: string;
  refund_subtotal: string;
  refund_shipping_fee: string;
  refund_tax: string;
  retail_delivery_fee: string;
  buyer_service_fee: string;
}

export interface ReturnLineItemDto {
  return_line_item_id: string;
  order_line_item_id: string;
  sku_id: string;
  sku_name: string;
  product_name: string;
  seller_sku: string;
  product_image: ReturnLineItemImageDto;
  refund_amount: RefundAmountDto;
}

export interface DiscountAmountDto {
  currency: string;
  product_seller_discount: string;
  shipping_fee_platform_discount: string;
  shipping_fee_seller_discount: string;
  product_platform_discount: string;
}

export interface ShippingFeeAmountDto {
  currency: string;
  seller_paid_return_shipping_fee: string;
  platform_paid_return_shipping_fee: string;
  buyer_paid_return_shipping_fee: string;
}

export interface SellerNextActionDto {
  action: string;
  deadline: number;
}

export interface PartialRefundDto {
  currency: string;
  amount: string;
}

export interface ReturnWarehouseAddressDto {
  full_address: string;
}

export interface ReturnOrderDto {
  order_id: string;
  return_id: string;
  return_type: string;
  return_status: string;
  arbitration_status: string;
  role: string;
  return_reason: string;
  return_reason_text: string;
  shipment_type: string;
  handover_method: string;
  return_tracking_number: string;
  return_provider_name: string;
  return_provider_id: string;
  pre_return_id: string;
  next_return_id: string;
  can_buyer_keep_item: boolean;
  update_time: number;
  create_time: number;
  seller_next_action_response: SellerNextActionDto[];
  return_line_items: ReturnLineItemDto[];
  discount_amount: DiscountAmountDto[];
  shipping_fee_amount: ShippingFeeAmountDto[];
  refund_amount: RefundAmountDto;
  return_shipping_document_type: string;
  return_method: string;
  is_combined_return: string;
  combined_return_id: string;
  seller_proposed_return_type: string;
  partial_refund: PartialRefundDto;
  buyer_rejected_partial_refund: boolean;
  return_warehouse_address: ReturnWarehouseAddressDto;
}

export interface ReturnOrdersDataDto {
  return_orders: ReturnOrderDto[];
  total_count: number;
  next_page_token: string;
}

export interface ResponseReturnOrdersDataDto extends TiktokResponseCommon<ReturnOrdersDataDto> {}