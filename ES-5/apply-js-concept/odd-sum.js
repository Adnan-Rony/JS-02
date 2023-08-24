// function getSumArray(numbers)
// {
//     // console.log(numbers);
//     for(let i=0;i<numbers.length;i++)
//     {
//         const index=i;
//         const element =numbers[index]
//         console.log(index,element); //index and elemets find
//     }

// }
// const MyNumber=[12,13,14,65,78,98,45,35];
// getSumArray(MyNumber);




function getSumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index,element,sum); 

    }

}
const MyNumber = [12, 13, 14, 65, 78, 98, 45, 35];
getSumArray(MyNumber);

//again try
// function ArryOfSum(numbers)
// {
//     let sum=0;
//     for(let i=0;i<numbers.length;i++)
//     {
//         sum=sum+numbers[i];
//         console.log(sum);

//     }

// }
// const arr=[12,13,14,15,16,99,23];
// ArryOfSum(arr);



// even all print numbers of array
function ArryOfEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // sum=sum+numbers[i];
        let element = numbers[i];
        if (element % 2 == 0) {
            console.log('even number print', element);

        }


    }


}
const arr = [12, 13, 14, 15, 16, 99, 23];
ArryOfEven(arr);
