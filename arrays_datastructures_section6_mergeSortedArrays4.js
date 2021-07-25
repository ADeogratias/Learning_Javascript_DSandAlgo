// Given 2 arrays that are sorted
// merge them together into 1 big 
// one that is still sorted

mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

// join the 2 arrays in 1 big arrays
// sort the array using mergesort

// let left  = 0;
// let right  = ar.length - 1;
// merge sort implementation
// const mergesortImplementation = (ar, left, right) => {
//     if (right > left)
//     let middle = left + (right - 1) / 2;
//     mergesortImplementation(ar, left, middle);
//     mergesortImplementation(ar, middle + 1, right );
//     merge(ar, left, middle, right);
// };


const mergeSortedArrays = (array1, array2) => {
    mergedSortedArray = [];
    let maxCount = array1.length - 1;
    let array2Length = array2.lenght - 1;
    let leftPointer = 0;
    let rightPointer = 0;
    // let count = 0;
    if (maxCount < array2Length) {
        maxCount = array2Length;
    }
    for(let i = 0; i <= maxCount; i++){
        
        let item1 = array1[leftPointer];
        let item2 = array2[rightPointer]; 

        if ( isGreater(item1, item2) & isGreater(maxCount, leftPointer)){
            mergedSortedArray.push(item1);
            leftPointer++;
        }
        else {
            if ( isGreater(array2Length, rightPointer)){
                mergedSortedArray.push(item2);
                rightPointer++;
            }
        }

        // if (isGreater(rightPointer, maxCount)){

        // }
    }
};


const isGreater = (item1, item2) => item1 > item2;


// to be continueed...n


const isGreater = (item1, item2) => item1 > item2;

const mergeSortedArrays = (array1, array2) => {
    let mergedSortedArray = [];
    let maxCount = array1.length;
    let array2Length = array2.length;
    
    console.log ("array 1 length: " + maxCount);
    console.log ("array 2 length: " + array2Length);

    let leftPointer = 0;
    let rightPointer = 0;
    // let count = 0;
    if (maxCount < array2Length) {
        maxCount = array2Length;
    }
    while(rightPointer < array2Length | leftPointer < maxCount){
        
        let item1 = array1[leftPointer];
        let item2 = array2[rightPointer]; 

        // if (isGreater(maxCount === leftPointer & ))

        if ( isGreater(item2, item1) | rightPointer === array2Length ){
            mergedSortedArray.push(item1);
            console.log ("array 1 received: " + item1);
            console.log ("LeftPointer before: " + leftPointer);
            leftPointer++;
            console.log ("after: " + leftPointer);

            // if (isGreater(maxCount, leftPointer)){
            //     leftPointer++;
            // }

        }
        else {
            mergedSortedArray.push(item2);
            console.log ("array 2 received: " + item2);
            console.log ("RightPointer before: " + rightPointer);
            rightPointer++;
            console.log ("after: " + rightPointer);
            // if ( isGreater(array2Length, rightPointer)){
            //     rightPointer++;
            // }
        }
    }
    return mergedSortedArray;
};

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));