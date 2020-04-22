'use strict'

const fibonacci = () => {
    let fibo = [];
    let element = 0;

    for (let i = 0; ; i++) {
        if (i < 2) {
            fibo.push(i);
            continue;
        }
        element = fibo[i - 1] + fibo[i - 2];

        if (element >= 350) {
            break
        }

        fibo.push(element);
    }

    return fibo;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
