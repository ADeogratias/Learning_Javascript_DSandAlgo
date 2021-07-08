
// I need to check the solution suggested from the course I am taking.
// But this is what I am able to work on and I guess it has a big O of a + b
// a being size of array1 and b being size of array2

// working function
const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];

const array3 = ['z','y','x'];

const common_items = (array1, array2) => {
    
    let array1_pointer = 0;
    let array1_legnth = array1.length - 1;

    let array2_legnth = array2.length - 1;
    let array2_pointer = array2_legnth;
    
    while (true){

        if ((array1_pointer > array1_legnth) | (array2_pointer < 0) ){
            console.log("ending");
            return false;
        }
        
        if (array1[array1_pointer] == array2[array2_pointer]){return true;} 

        if ((array1[array1_pointer] < array2[array2_pointer]) && (array1_pointer < array1_legnth+1) ){
            array1_pointer += 1;
        }

        if ((array1[array1_pointer] > array2[array2_pointer]) && (array2_pointer > -1) ){
            array2_pointer -= 1;
        }
    } 
};

console.log(common_items(array1, array2));





// had a bug of not having a working if condition
// this function would get to a point during the testing
// were the while conditions continues running, 
// but it is not meeting any if condition... 

//const array1 = ['a','b','c','x'];
//const array3 = ['z','y','i'];
//const array2 = ['z','y','x'];

//const common_items = (array1, array2) => {
    
    //let array1_pointer = 0;
    //let array1_legnth = array1.length;

    //let array2_legnth = array2.length - 1;
    //let array2_pointer = array2_legnth;
    //let terminate = 0;
    
   // while (true){

     //   if ((array1_pointer > array1_legnth) | (array2_pointer < 0) ){
       //     console.log("ending");
         //   return false;
        //}
        
        //if (array1[array1_pointer] == array2[array2_pointer]){return true;} 

    //    if ((array1[array1_pointer] < array2[array2_pointer]) && (array1_pointer < array1_legnth) ){
      //      console.log('array1 ' + array1[array1_pointer]);
        //    array1_pointer += 1;
        //}

    //    if ((array1[array1_pointer] > array2[array2_pointer]) && (array2_pointer > 0) ){
      //      console.log('array2 ' + array2[array2_pointer]);
        //    array2_pointer -= 1;
          //  console.log('array2 ' + array2[array2_pointer]);
        //}
    //} 
//};

//console.log(common_items(array1, array2));