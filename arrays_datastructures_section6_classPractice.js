// ******* reference type vs primitive types *******

// Primitive types are the basic types 
// of data: byte , short , int , long , float , double , boolean , char  
// Primitive variables store primitive values. 
// Reference types are any instantiable class 
// as well as arrays: String , Scanner , Random , Die , int[] , String[] , etc. 
// in Java for instance

// reference types

// Example 1
[] === [] // will basically give you a false result

// Example 2
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2; // will return True
object2 === object3; // return false

object1.value === object3.value; // return true

// numbers, null, booleans, strings, undefined and symbols 
// are defined by the programming language 
// example var number1 = 1 Javascript knows 
// what 1 is its a number and it's a primitve type


// Objects are whats called the reference types in javascript.
// a reference type, which is a non-premitive type are not 
// defined by the programming language
// They are created by the programmer
// example var object 1 = {value: 10}; this stores the reference/address 
// of where the value is stored in the memory



// ******* context vs scope *******

// scope is created when we see curly brackets
function b() {
    let a = 2;
}

console.log(a) // Results into an error or logs an error message

// context tells you where we are within the object
console.log(this)

// in the example above... "this" is the window object
console.log(this === window) // returns true

this.alert("hello") // print hello in a dialog box on your screen
// just like window.alert("hello") would do that same thing

// *** trick function a() { console.log(this)} and we call a()
// show the window object 
// technically funtion a is inside the window object
// to create a new value for this you need to do the following for instance
// const object4 = { a: function(){ console.log(this);}}
// oject4.a() prints the object... which is object4


// ******* instantiation *******
// instation is when you make a copy of an object and reuse the code

