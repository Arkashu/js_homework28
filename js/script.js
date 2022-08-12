'use strict'
const func = () => {
    let res = 0;
    return (x) => {
        res += x;
        return res;
    }
};
const sum = func();


console.log(sum(5))
console.log(sum(3))
console.log(sum(2))