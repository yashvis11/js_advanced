//this is a synchronous function and will execute as soon as the function is executed with no time pauses
// let i;
// for(i=0;i<=10;i++)
// {
//     console.log(i);
// }


function sayHello() {
    console.log("Hello");
}
//example of asynchronous function
setTimeout(() => {
    sayHello();
}, 2000)



