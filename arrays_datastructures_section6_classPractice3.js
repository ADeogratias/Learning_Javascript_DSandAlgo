// Reversing a string exercise
// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman iH'

function myReversefunc(str) {
    let string2Reverse = str.split('');
    string2Reverse.reverse()
    console.log(string2Reverse);
    let strCount = string2Reverse.length -1;
    let reversedString;
    while (strCount <= 0) {
        reversedString = reversedString + string2Reverse[strCount];
        strCount--;
    }
    return reversedString;
}

// Trying to improve the function above for readability

let myReversefunc2 = (str) => {
    
};