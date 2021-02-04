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
let all_goods = {
  // товары и цены
  iphone: 1000,
  imac: 1500,
  ipad: 1200,
};

let my_basket = {
  // название товара и количество в корзине
  ipad: 3,
  iphone: 1,
  imac: 1,
};

function countBasketPrice(basket, goods) {
  let BasketPrice = 0;
  for (let key in basket) {
    BasketPrice += basket[key] * goods[key];
  }
  return BasketPrice;
}

console.log(countBasketPrice(my_basket, all_goods));
