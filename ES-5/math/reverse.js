function reverse(text)
{
    for(let i=text.length-1;i>=0;i--)  //last element ar index total theke 1 kom.tai length-1 korteiiii hobe
    {
        const element=text[i];
        console.log(element);
    }
}
const myString='i am good devoloper';
const reversedString= reverse(myString);
