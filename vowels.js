let vowels=["a","e","i","o","u"]
let name="sanitta"
let spl=name.split('')
for(var i=0;i<spl.length;i++)
{
    for(var j=0;j<vowels.length;j++)
    {
        if(spl[i]==vowels[j])
        {
            console.log(spl[i])
        }
    }
}


// let vol=['a','e','i','o','u']
// let name="hi iam sanitta"
// let spli=name.split('')
// for(var i=0;i<spli.length;i++)
// {
//     for(var j=0;j<vol.length;j++)
//     {
//         if(spli[i]==vol[j])
//         {
//             console.log(spli[i])
//         }
//     }
// }