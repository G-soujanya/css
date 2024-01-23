// function x()
// {
//     var a=9;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// z();
// function x(){
//     var i=1;
//     setTimeout(function()
//     {
//         console.log(i);
//     },1000);
//     console.log("hello world");
// }
// x();
// function x(){
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hello world");
// }
// x();
// function x(){
//     for(var i=1;i<=5;i++)
//     {
//         let a=i;
//         setTimeout(function()
//         {
//             console.log(a);
//         },i*1000);
//     }
//     console.log("hello world");
// }
// x();
// function x(){
//     for(var i=1;i<=5;i++)
//     {
       
//         function close(i)
//         {
//             setTimeout(function()
//             {
//                 console.log(i);
//             },i*1000);
//         }
//         close(i);
//     }
//     console.log("hello world");
// }
// x();
// int
function counter()
{
    var count=0;
    function increment()
    {
        count++;
        console.log(count);
    }
    return increment;
}
var counter1=counter();
counter1();
counter1();