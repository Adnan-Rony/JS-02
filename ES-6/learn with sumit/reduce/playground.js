

const numbers = [1, 2, 3, 4];

const result = numbers.reduce((preValue, currentValue,currentindex) => {

    // return preValue + currentValue
    return currentindex <2
})

console.log(result);

