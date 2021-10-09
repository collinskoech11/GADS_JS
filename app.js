let message = 'hello';
if (message === 'hello') {
    var count = 100;// without 'var' => reference error
}
console.log(count);

// IMmmediately Invoked Function Expression 
(function() {
    console.log("hello);
})();
 //closures 
let greeting = (function() {
    let message = 'hello';
    let getMessage = function() {
        return message; 
    };
    return getMessage: getMessage, //clossure
})(); 
//console.log(greeting.message);   //undefined without closures
console.log(greeting.getMessage());
