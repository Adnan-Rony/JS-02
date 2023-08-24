const person={
    names:'adnan',
    phone:'017474730447',
    age:21
}
// console.log(person.age); //easy way


// console.log(person['phone']); //array used to serch elemets
const x='names';
// console.log(person[x]); //same kaj only variable used kore hoy


// keys print
const keys=Object.keys(person);
console.log(keys);

// value print
const value=Object.values(person);
console.log(value);
