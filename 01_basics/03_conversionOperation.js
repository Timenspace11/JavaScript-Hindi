//let score = 33          //  initially as we have the value as  33 it gives the type as number ;
                        // now we will check for diffrent types like , making it null 
//let score  = null

//let score =  true

let score = "234sun"
console.log(typeof score)
console.log(score) 

let checkit  =  Number(score)
console.log(typeof checkit)
console.log(checkit)    // when we have null and we have converted it into the  Number it is giving the output as 0
                        //  when we have Bool as input and we are converting it to the Number it gives 1,0 

/*

 {Important}
// Now if we use some string like a alphanumeric string and we are converting it to the number then we check for its datatype it gives us the NaN (Not a number);


*/
// when we take score as null we get the output as the  ->  object  on first   and after converting it to Number we get its datatype as null;


