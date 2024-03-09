var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];

viewCartButton.addEventListener('click', function () {
  shoppingCart.classList.toggle('show');
});

let cart = []
let total = 0
var products = document.getElementsByClassName('products')[0];

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    const itemName = e.target.closest('.item').getAttribute('data-name');

    const itemPrice = e.target.closest('.item').getAttribute('data-price');

    const product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);
    total += parseInt(product.price);
    rendercart();
    renderTotal();
  }
});

const rendercart = function () {
  const cartList = document.getElementsByClassName('cart-list')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  let items = '';

  for(var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name + ' - $' + cart[i].price + '</div>';
  }

  cartList.innerHTML = items;
};

var clearCart = document.getElementsByClassName('clear-cart')[0]


const renderTotal = function () {
  const totalElement = document.getElementsByClassName('total')[0];

  totalElement.innerHTML = total;
};

clearCart.addEventListener('click', function () {
  cart = [];
  total = 0;
  rendercart();
  renderTotal();
});
