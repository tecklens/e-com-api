https://github.com/phamkhanhminhman97/shopee-tiktok-lazada-api
## ⚡️ Installation

- **npm**: `npm i e-com-api`
- **yarn**: `yarn add e-com-api`

## TIKTOK MODULE (UPDATE API V2 VERSION 2309)

```
  const tiktok = new TiktokModule({
  appKey: '1234567890',
  appSecret: '1234567890',
  shopId: '1234567890',
  shopCipher: '1234567890',
  accessToken: '1234567890',
});
```

| Function            | Status |
| ------------------- | ------ |
| getOrderList        | Doing  |
| getOrderDetail      | Done   |
| getProductDetail    | Done   |
| getAuthorizedShop   | Done   |
| getPackageTimeSlots | Done   |
| shipPackage         | Done   |
| getShippingDocument | Done   |
| getCategories       | Done   |
| getBrands           | Done   |
| getAttributes       | Done   |
| createProduct       | Done   |

![alt](./src/assets/tiktok.method.png)

## SHOPEE MODULE

```
  const shopee = new ShopeeModule({
  partnerId: 1234567890,
  partnerKey: '1234567890',
  shopId: '1234567890',
  accessToken: '1234567890',
});
```

| Function               | Status |
| ---------------------- | ------ |
| getOrders              | Doing  |
| getOrderDetail         | Done   |
| getProductItemList     | Done   |
| getProductItemBaseInfo | Done   |
| updateStock            | Done   |
| unListItem             | Done   |
| updatePrice            | Done   |
| addItem                | Done   |
| getChannelList         | Done   |
| fetchToken             | Done   |
| getCategory            | Done   |
| getAttributes          | Done   |
| getBrandList           | Done   |
| shippingParameter      | Done   |
| shipOrder              | Done   |

![alt](./src/assets/shopee.method.png)

## Lazada MODULE

```
  const lazada = new LazadaModule({
  appKey: '1234567890',
  appSecret: '1234567890',
  shopId: '1234567890',
  appAccessToken: '1234567890',
});
```

![alt](./src/assets/lazada.method.png)

## To be continued...# shopee-tiktok-lazada-api

# e-com-api
