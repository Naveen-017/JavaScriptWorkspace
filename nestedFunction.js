function addSquares(a, b) 
{
    function square(x) 
    {
        return x * x;
    }
    console.log(square(a) + square(b));
}
console.log(addSquares(3, 2));