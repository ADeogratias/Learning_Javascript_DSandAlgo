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
    let array1Length = array1.length - 1;
    let array2Length = array2.lenght - 1;
    let leftPointer = 0;
    let rightPointer = array2Length;
    // let count = 0;
    let maxCount = array1Length;
    if (maxCount < array2Length) {
        maxCount = array2Length;
    }
    for(let i = 0; i < maxCount; i++){
        
    }
};

// to be continueed...