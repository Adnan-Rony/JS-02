function reverseWord(text)
{
    const words=text.split(' ');
    const result=[];
    for(let i=words.length-1;i>=0;i--)
    {
        const element=words[i];
        result.push(element);
    }
    console.log(result);
   
}
const MyString='i am good person';
reverseWord(MyString);