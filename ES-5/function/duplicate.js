
function duplicate(names){
const unique=[];
    for(let i=0;i<names.length;i++)
    {
        const name=names[i];
        if(unique.includes(name)==false)
        {
            unique.push(name);
        }
        // console.log(names[i]);
    }
    return unique;
}
const names=['adu','jadu','mona','sona','adu','aduyan','sona','sagol','magol','sagol'];

const uniqueNames=duplicate(names);
console.log(uniqueNames);
