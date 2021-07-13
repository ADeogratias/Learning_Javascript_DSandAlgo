//Given 2 arrays, create a function that
//lets a user know(true/false) whether
//these 2 arrays contain any common items
//For example 
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should return False.
//-------------
//const array1 = ['a','b','c','x'];
//const array3 = ['z','y','x'];
//should return True.

// 2 parameters - arrays - no size limit 
// return true or false 

// ****** First solution ********
// brute force approach should be a Big O N^2  
// we compare each element from the first array
// with all the elements of the second array
// Big O (1) - space complexity 

// ****** Second solution ********
// binary search since the arrays look sorted
// should be a Big O N log N  
// we searh each element from the first array
// in the second array and it is basically a repetition


//******* Third solution **********/
// I need to check the solution suggested from the course I am taking.
// But this is what I am able to work on and I guess it has a big O of a + b
// a being size of array1 and b being size of array2
// Big O (1) - space complexity 

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


//About to implement the 4th solution. It is the one from the course
//******* Fourth solution **********/
// It is based on changing one of the arrays into a hashmap and 
// and doing a look up that is basically going to help with time complexity
// Big O (a) - space complexity 

// implementation goes like
//  array1 ==> obj {
//  a:true,
//  b:true,
//  c:true,
//  x:true
//}
// array2[index]=== obj.properties

containsCommonItem = (array1, array2) =>{
  // loop through first  and create object
  // where properties === items in the array
  let map = {};
  
  for (let arrayEl = 0; arrayEl< array1.length; arrayEl++){
    if(!map[array1[arrayEl]]){
      const item =array1[arrayEl];
      map[item]= true;
    }
  }

  console.log(map);

  // loop through second array and check if item 
  // in second array exists on created object.
  for (let array2El = 0; array2El< array2.length; array2El++){
    if(map[array2[array2El]]){
      //return map[array1[array2El]];
      return true;
    }
  }

  return false;

};

// using javascript built in functions you can do the above with clean codes
// in a more readable way

containsCommonItem2 = (array1, array2) =>{
  return array1.some(item => array2.includes(item));
};

// the function above run time is 
// O(a + b) time complexity
// Big O (a) - space complexity 


// then you talk about modularing your codes.
// having a function that does one particular task and does it very well.


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