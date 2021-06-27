
// log all pairs array
const boxes = [1,2,3,4,5];

// my approach
// runtime Big O of n^2 - quadratic time
//function to create pairs from an array
function allArray_pairs(boxesarray){
    let pairs=[];

    for (let i = 0; i < boxesarray.length; i++){
        for (let j = 0; j < boxesarray.length; j++){
            pairs.push([boxesarray[i],boxesarray[j]]);
        }
    }
    
    return pairs

}


// Udemy instructors approach
// log all pairs of array
//function logAllPairsOfArray(array){
//    for (let i = 0; i < array.length; i++){
//        for (let j = 0; j < array.length; j++){
//            console.log(array[i],array[j]);
//        }
//    }
//}

// ES5 syntax
function logAllPairsOfArray(boxes){
    boxes.forEach(function(firstBox){
        boxes.forEach(function(secondBox){
            console.log(firstBox, secondBox);
        });
    });
}




// driver codes

//let pairz = allArray_pairs(boxes);

//for (let i = 0; i < pairz.length; i++) {
//    console.log(pairz[i]);
//}

// uncomment these to run instructors approach to logging all array pairs
logAllPairsOfArray(boxes);


