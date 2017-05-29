function sayHi() {
    console.log('I am learning node.js');
}

//sayHi();

let sayBye = function(a, b) {
    console.log('Bye to the heavy backends : ' + 'another world ');
    console.log('Result : ' + (a + b));
};

//sayBye(5, 10);

function callmyFunc(func) {
    func();    
}

callmyFunc(sayHi);

