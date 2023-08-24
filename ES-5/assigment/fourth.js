// function findAddress(obj)
// {
   
//     if (obj['street'] === undefined || obj['house'] === undefined || obj['society'] === undefined) {
//           const value =['_','_','_'];
//             return value;
//     }

    

//     const values =Object.values(obj);
    
//     return values;

// }
// const obj=
//     {street:10,house:'15A', society:'Earth Perfect'};

//     console.log(findAddress(obj));




// function findAddress(obj)
// {
//    const street=obj.street || '_';
//    const house=obj.house || '_';
//    const society=obj.society || '_';
//    return 
    

// }
// const obj=
//     {street:10,house:'15A', society:'Earth Perfect'};

//     console.log(findAddress(obj));

function findAddress(obj) {
    const street = obj.street || '_';
    const house = obj.house || '_';
    const society = obj.society || '_';
    
    return house + ', ' + street + ', ' + society;
}

const obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
};

console.log(findAddress(obj));


