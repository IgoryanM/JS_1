const cart = {
    // товар, цена, количество
    goods: [
      {
        title: 'iphone',
        price: 1000,
        quantity: 1
      },
      {
        title: 'imac',
        price: 1500,
        quantity: 1
      },
      {
        title: 'ipad',
        price: 1200,
        quantity: 3
      }
    ],
  
    countBasketPrice() {
      let BasketPrice = 0;
      this.goods.forEach(function(item) {
        BasketPrice += item.price * item.quantity;
      });
      return BasketPrice;
    },
  
    init() {
      const cartDiv = document.getElementById('cart');
      cartDiv.style.backgroundColor = 'orange';
      if (this.goods.length > 0) cartDiv.textContent = `В корзине  ${this.goods.length} товара на сумму ${this.countBasketPrice()} рублей.`;
      else cartDiv.textContent = `Ваша корзина пуста.`;
    }
  
  };
  
cart.init();
