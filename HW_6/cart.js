const cart = {
  goodsInCart: [],
  cartDiv: document.getElementById('cart'),

  init() {
    this.cartDiv.style.backgroundColor = 'orange';
    this.update(this.cartDiv);
  },

  countCartPrice() {
    let CartPrice = 0;
    this.goodsInCart.forEach(function(item) {
      CartPrice += item.price * item.quantity;
    });
    return CartPrice;
  },

  update() {
    if (this.goodsInCart.length > 0) this.cartDiv.textContent = `В корзине  ${this.goodsInCart.length} товара на сумму ${this.countCartPrice()} $.`;
    else this.cartDiv.textContent = `Ваша корзина пуста.`;
  }

};

const catalog = {
  cart,
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
      quantity: 1
    }],

  init() {
    for (let i in this.goods) {
      const catalogDiv = document.createElement('div');
      const btn = document.createElement('div');

      catalogDiv.className = 'item';
      //catalogDiv.id = this.goods[i].title;
      btn.className = 'button';
      btn.id = this.goods[i].title;

      document.body.appendChild(catalogDiv);
      document.body.appendChild(btn);
      catalogDiv.textContent = this.goods[i].title + ': ' +this.goods[i].price + ' $';
      btn.textContent = 'Купить';

    this.initClickHandler(btn);
    }
  },

  initClickHandler(elem) {
    elem.addEventListener('click', (event) => this.clickHandler(event));
  },

  clickHandler(event) {
      if (event.target.tagName === 'DIV') {
        this.addToCart(event.target.id);
        console.log(this.cart.goodsInCart);
        cart.update();
      };
  },

  addToCart(goodTitle) {
    let goodInCart = false;

    for (let i in this.goods) {
      if (goodTitle == this.goods[i].title) {
        if (cart.goodsInCart.length == 0) cart.goodsInCart.push(this.goods[i]);
        else {
          for (let j in cart.goodsInCart) {
                if (cart.goodsInCart[j].title == goodTitle) {
                  cart.goodsInCart[j].quantity += 1;
                  goodInCart = true;
                }
              } 
          if (goodInCart == false) cart.goodsInCart.push(this.goods[i]);
        };
      };
    };
  }
  
}


catalog.init();
cart.init();
