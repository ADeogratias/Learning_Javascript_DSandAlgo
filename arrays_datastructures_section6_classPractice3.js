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


// using Javascript reverse function would improve readability more
const reversefunc2 = (str) => str.split('').reverse();


// Solution proposed from Andrei's course
function reverse(str) {
    //check input
    if(!str || str.length< 2 || typeof str !== 'string') {
        return 'Hmmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i = 0;  i--){
        backwards.push(str[i]);
    }
    console.log(backwards)

    return backwards.join('');
    // return backwards.toString();
}

reverse('Hi My name is Andrei')