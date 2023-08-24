function IsEven(number)
{
    const remainder=number%2;
    // console.log(remainder);
    if(remainder==0)
    {
        // console.log('even');
        return true;
    }
    else{
        // console.log('odd');
        return false;
    }
}
const MyNum=IsEven(463);
const HerNum=IsEven(42);
console.log(MyNum)
console.log(HerNum);

