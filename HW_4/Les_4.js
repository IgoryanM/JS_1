// task_1
let num = prompt('Введите число от 0 до 999: ');

function numberToObject(number) {
  if (number > 999 || number < 0) {
    console.log('Ваше число не подходит.');
    return {};
  } else {
    let one = number % 10;
    let dozens = ((number % 100) - one) / 10;
    let hundreds = (number - (number % 100)) / 100;

    obj = {
      единицы: one,
      десятки: dozens,
      сотни: hundreds,
    };

    return obj;
  }
}

console.log(numberToObject(num));


// task_2
const cart = {
  // товар, цена 
  goodsPrice: {
    iphone: 1000,
    imac: 1500,
    ipad: 1200
  }, 

  // товара, количество
  goodsQuantity: {
    ipad: 3,
    iphone: 1,
    imac: 1,v
  },

  countBasketPrice: function() {
    let BasketPrice = 0;
    for (let key in this.goodsQuantity) {
      BasketPrice += this.goodsQuantity[key] * this.goodsPrice[key];
    }
    return BasketPrice;
  }
};

console.log(cart.countBasketPrice());
