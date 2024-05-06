function factorial(n){
let x = 1;
for(let i = 2; i<=n; i++){
    x *= i;
   
}
return x;
}
console.log(factorial(4));

function calFac(n)
{
    if(n === 0 || n === 1)
    {
    return 1;
    }else{
    return n*calFac(n-1);
    }
}
console.log(calFac(3))
    



