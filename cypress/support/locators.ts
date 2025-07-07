export const loginLocators = {
  username: '#user-name',
  password: '#password',
  loginButton: '#login-button'
} as const;

export const productLocators = {
  addToCartButton: (productName: string) => `button[data-test='add-to-cart-${productName}']`,
  cartBadge: '.shopping_cart_badge',
  sortDropdown: '[data-test="product_sort_container"]',
  productPrices: '.inventory_item_price',
  productNames: '.inventory_item_name',
}; 