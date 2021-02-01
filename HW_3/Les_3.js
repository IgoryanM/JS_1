//task_1
i = 2;
let flag;

while (i <= 100) {
    flag = 1;
    j = 2;
    while (j <= Math.sqrt(i)) {
        if (i % j == 0) {
            flag = 0
            break;
        }
        j++
    }
    if (flag == 1) console.log(i);
    i++;
}

//task_2
var user_basket = [];

function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        BasketPrice += basket[i];
    }
    return BasketPrice;
}
