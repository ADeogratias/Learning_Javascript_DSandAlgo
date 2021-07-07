array1 = ['a','b','c','x'];
array2 = ['z','y','i'];

let common_items = (array1, array2) => {
    
    array1_pointer = 0;
    array1_legnth = array1.length - 1;

    array2_legnth = array2.length - 1;
    array2_pointer = array2_legnth;
    
    while (True){
        
        if (array1[array1_pointer] == array2_pointer[array2_pointer]) return True; 

        if ((array1[array1_pointer] < array2[array2_pointer]) && (array1_pointer < array1_legnth) ){
            array1_pointer += 1;
        }

        if ((array1[array1_pointer] > array2[array2_pointer]) && (array2_pointer > 0) ){
            array2_pointer -= 1;
        }

        if ((array1_pointer >= array1_legnth) | (array2_pointer <= 0) ){
            return False;
        }
    } 
};

console.log(common_items)
