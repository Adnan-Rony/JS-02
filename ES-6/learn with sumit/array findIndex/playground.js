
//when which number i want, but that number is not given tha array then always show -1
const number = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10];

const result = number.findIndex((currentvalue, index, arr) => {

    // return !(currentvalue % 2)

    return currentvalue >= 30

})

console.log(result);