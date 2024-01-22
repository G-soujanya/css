var a=10;
function outer()
{
    inner();
    var c=1;
    function inner()
    {
        // var a=10;
        console.log(c);
    }
}
outer();
console.log(a);
