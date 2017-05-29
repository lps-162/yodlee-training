const PI = 3.142;

function counter(arr) {
    console.log('Array length : ' + arr.length);
}

function adder(a, b) {
    console.log('Added result : ' + (a+b));
}

module.exports = {
    counter: counter,
    adder: adder,
    PI: PI
};
