import { productsLoader } from "./productsLoader.js"

const SHOPIFY_STOREFRONT_API = '7205448e608af45a59ff19512e93792b';

(async function () {
  let products = await productsLoader(SHOPIFY_STOREFRONT_API);
  console.log('===> demo_metaobj: products ', products);
})()
