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
    let ar1Len = array1.length;
    let ar2Len = array2.length;
    
    let leftPointer = 0;
    let rightPointer = 0;
    
    while(rightPointer < ar2Len | leftPointer < ar1Len){
        
        let item1 = array1[leftPointer];
        let item2 = array2[rightPointer]; 

        if ( isGreater(item2, item1) | rightPointer === ar2Len ){
            mergedSortedArray.push(item1);
            leftPointer++;

        }
        else {
            mergedSortedArray.push(item2);
            rightPointer++;
        }
    }
    return mergedSortedArray;
};

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));