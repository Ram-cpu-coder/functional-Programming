//functional programming
console.log("It is working");
//function:
// initialising
// analysing 
//calling
//invoking





// side effects:

// let i = 0;
// function add(a, b) {
//     i++  //updating the memory
//     const ttl =  a + b; // created the variable in the memory
//     console.log(ttl);  //causing I/O 
//     return ttl;
// }

// pure function:

// function add(a, b) {
//     return a + b;
// };
// // OR
// const add = (a, b) => a + b; 

// const val = add(1,2)+ add(3,4)+ add(4,5);

// console.log(val);


// high order function:
// function that takes one or more functions as an argument is high order function or returns a function itself

//first example:
// const add = (a, b)=>a + b;
// const sub = (a, b)=> a-b;

// const calculator = (a, b, func)=> {
//     return func(a,b)
// } 
// const val = calculator(3,2, add)
// console.log(val);

//second example:

const addAndSquare = (a, b)=>{
    const ttl = a + b;

    const square = (multiplier) => ttl ** multiplier;
    return square;
}

// const val = addAndSquare(3,2);
// console.log(val(3));

// Or

const val = addAndSquare(2,3)(3);
console.log(val);

// recursion

// homework