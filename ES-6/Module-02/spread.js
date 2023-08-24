const max = Math.max(2,5,33,65,98,56,55)

const numbers =[3,56,78,55,6,7,44,34];

const ArrayMax =Math.max(...numbers) //array max ber korte chaile ... must use korte hobe variable ar sathe


// console.log(...numbers); //... use korle array ar rekhe nah only numbers show kore


// console.log(ArrayMax);

// console.log(max);


//used spread to add many array

const fruits =['mango','lichi','jack'];

const subject =['cse','eee','nfe'];

const addall=[...fruits,...subject];

console.log(addall);


//used spread add of object

const circle={
    radius:10,
};
const style ={
    backgroundColor:'red',
};
const final ={
    ...circle,...style
};

console.log(final);


//max-min
const num=[1,2,4,56,677,78,99];

const  maximum = Math.max(...num);

const  minimum = Math.min(...num);

console.log(maximum);

console.log(minimum);
