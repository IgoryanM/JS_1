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

  countBasketPrice: function() {
    let BasketPrice = 0;
    this.goods.forEach(function(item) {
      BasketPrice += item.price * item.quantity;
    });
    return BasketPrice;
  }
};

console.log(cart.countBasketPrice());
