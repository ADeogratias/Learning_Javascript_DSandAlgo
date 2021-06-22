function functionChallenge(input){

    //let t0 = performance.now();

    let a  = 10;
    a  =  50 + 3;

    for (let i  = 0; i < input.length; i++){
        anotherFunction();
        let stranger = true;
        a++;
    }

    //let t1 = performance.now();

    //return [a, t0, t1];
    return [a];
}

console.time()
let array = functionChallenge([0,1,2,3,4,5,6,7,8,9]);
console.timeEnd()

console.log(typeof array);

function anotherFunction(){
}