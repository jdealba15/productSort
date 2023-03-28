const products = [
  { name: 'iPhone 13', price: 999, category: 'Electronics' },
  { name: 'Levi's 501', price: 89, category: 'Clothing' },
  { name: 'Nintendo Switch', price: 299, category: 'Gaming' },
  { name: 'Bose QuietComfort 35 II', price: 299, category: 'Electronics' },
  { name: 'Kindle Paperwhite', price: 129, category: 'Books' }
];

var lowPricedProducts = [];

function productSort(products) {

    for(let i = 0; i < products.length; i++) {

      if (products[i].price < 250) {
      lowPricedProducts.unshift(products[i].price)

      }

      //lowPricedProducts.unshift(products[i].price);
   }
}

productSort(products)
console.log(lowPricedProducts);
