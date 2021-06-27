// log all pairs array
const boxes = [1,2,3,4,5];

//function to create pairs from an array
function allArray_pairs(boxesarray){
    let pairs=[];

    for (let i = 0; i < boxesarray.length; i++){
        for (let j = 0; j < boxesarray.length; j++){
            pairs.push([boxesarray[i],boxesarray[j]]);
            console.log(boxesarray[i]);

        }
    }
return pairs
}


// driver codes

let pairz = allArray_pairs(boxes);

for (let i = 0; i < pairz.length; i++) {
    console.log(pairz[i]);
}