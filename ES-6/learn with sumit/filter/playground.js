



const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = number.filter((currentvalue, index, arr) => {
    console.log("index : ",index);
    console.log("array :",arr);
    return currentvalue >4 
    // return currentvalue % 2


})
// console.log(number);
console.log(result);