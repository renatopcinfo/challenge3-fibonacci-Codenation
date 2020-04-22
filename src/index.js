'use strict'

const fibonacci = () => {
    let fibo = [];
    let numFibo = 0;

    for (let i = 0; ; i++) {
        if (i < 2) {
            fibo.push(i);
            continue;
        }
        numFibo = fibo[i - 1] + fibo[i - 2];

        if (numFibo >= 350) {
            break
        }

        fibo.push(numFibo);
    }

    return fibo;
}
//console.log(fibonacci())

const isFibonnaci = (num) => fibonacci().includes(num);

//console.log(isFibonnaci(13))

module.exports = {
    fibonacci,
    isFibonnaci
}
