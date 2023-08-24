// function matchFinder(string1,string2)
// {
//         if(typeof string1 !== 'string' || typeof string2 !=='string')
//         {
//             return 'please provide a string';
//         }
//         if(string1.length==string2.length)
//         return true;


//          else

//     return false;
  

      


// }
// const result=matchFinder('John Doe','ohn');
// console.log(result);




// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'please provide a string';
//     }
    
//     let index1 = 0;
//     let index2 = 0;

//     while (index1 < string1.length && index2 < string2.length) {
//         if (string1[index1] === string2[index2]) {
//             index2++;
//         }
//         return true;
//     }

 
//     index2 === string2.length;
//     return false;
// }

// const result = matchFinder('jahn Doe', 'ohn');
// console.log(result); 




function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'please provide a string';
    }

    if (string1.length !== string2.length) {
        return false; 
    }

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            return false; 
        }
    }

    return true; 
}

const result = matchFinder('John Doe', 'ohn');
console.log(result); 



