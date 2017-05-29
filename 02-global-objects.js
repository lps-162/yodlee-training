// setTimeout(function() {
//     console.log('Node.js uses v8')
// }, 2000);
let time = 0;
let timer = setInterval(function() {
    time +=2;
    console.log('this will be printed multiple times');
    if (time > 2) {
        let name = 'venkat';
        clearInterval(timer);
    }
 }, 1000);