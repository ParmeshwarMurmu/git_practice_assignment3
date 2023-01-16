let n = 15;
let count = 0;
for(let i=0; i<n; i++)
{
if(n%i==0)
{
count++;
}
}

if(count ==1)
{
console.log("Prime Number");
}
else
{
console.log("Not Prime");
}