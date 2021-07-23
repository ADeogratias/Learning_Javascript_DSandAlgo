// Given 2 arrays that are sorted
// merge them together into 1 big 
// one that is still sorted

// to be continueed...

mergSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

// join the 2 arrays in 1 big arrays
// sort the array using mergesort

let left  = 0;
let right  = ar.length - 1;
// merge sort implementation
const mergesortImplementation = (ar, left, right) => {
    if (right > left)
    let middle = left + (right - 1) / 2;
    mergesortImplementation(ar, left, middle);
    mergesortImplementation(ar, middle + 1, right );
    merge(ar, left, middle, right);

};

// to be continueed...