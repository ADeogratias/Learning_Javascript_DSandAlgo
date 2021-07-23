// Reversing a string exercise
// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function myReversefunc(str) {
    let string2Reverse = str.split('');
    let strCount = string2Reverse.length -1;
    let reversedString;
    while (strCount >= 0) {
        if (reversedString === undefined){
        reversedString = string2Reverse[strCount];
        }
        else{
        reversedString = reversedString + string2Reverse[strCount];
        }
        strCount--;
    }
    return reversedString;
}

// Trying to improve the function above for readability

const myReversefunc2 = (str) => {
    let str2Reverse = str.split('');
    let reversedStr = [];
    
    for (count = str.length - 1; count >= 0; count--) {
        reversedStr.push(str2Reverse[count]);
    }

    return reversedStr.join('');
};