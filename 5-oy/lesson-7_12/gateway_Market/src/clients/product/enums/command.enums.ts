export enum ProductCommand {
  PRODUCT_CREATE = 'product-service.product.create',
  PRODUCT_DELETE = 'product-service.product.delete',
  PRODUCT_UPDATE = 'product-service.product.update',
  PRODUCT_GETALL = 'product-service.product.getAll',
  PRODUCT_GETONE = 'product-service.product.getOne',
}

export enum OrderCommand {
  ORDER_CREATE = 'order-service.order.create',
  ORDER_DELETE = 'order-service.order.delete',
  ORDER_GETALL = 'order-service.order.getAll',
  ORDER_GETONE = 'order-service.order.getOne',
}