# Basics

- JS is interpreted language (not compiled), So can run the program partially if error comes later.
- It goes line by line (interpreted)
  (One line runs at a time)
- for printing ~ console.log("hello world");

-----------------------------------------------------------------------

# Why JS

- Browsers can only understand HTML/CSS/JS (not technically true)
- Due to Node.js, JS can also be used for backend development.
- JavaScript is a dynamic language (can move fast)
- JS is single threaded
  . JS cacn only use one thread at a time, which is bad for a scalable system, though there is a way to make it use all coures of your machine.

Variables - (let, var, const)    /var is not used nowadays/
Data types - strings, numbers and booleans
If/Else and Loops - same as in C++
- They are simple primitives

-----------------------------------------------------------------------

# Arrays

Arrays are used to store multiple values in a single variable.
  eg- const ages = [21, 22, 23, 24, 25]
       now age[0] = 21 , age[3] = 24
           age.length = 5 (size of array)
  Syntax -  let array = [value1, value2, value3];  // Create an array 
            console.log(array[0]);  // Access the first element

-----------------------------------------------------------------------

# Objects

An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any data type.
It's used to store/aggregate related data together.

  eg- let person = {
          name: 'John',
          age: 30,
          isStudent: false
          };

     Here:
     -   name, age, and isStudent are the keys (or properties).
     -  'John', 30, and false are the values associated with those keys.
    Objects are essential for organizing and managing complex data in JavaScript!

-----------------------------------------------------------------------

# Class

- A class is essentially a blueprint for creating objects. 
  It defines the properties and methods that the objects created from it will have.

 Syntax-  class className {
            constructor ( property1 , property2 ){
                  this.property1 = Prop1;
                  this.property2 = Prop2;
                      }
           methodName(){
             console.log ( property1 : P1 , property2 : P2 );
                   }
                 }

eg-  class Animal {
        constructor ( name , legCount ){
            this.name = name ;
            this.legCount = legCount ;
             }
          identity () {                                                   //  wrote "identity" instead of "name" to avoid name conflict
            console.log ( "hi there , I am  " + this.name );
                  }
                 }      
          let dog = new Animal ( "dog" , 4 )    // create object 
          dog.identity () ;     // call function on object            
    // Output : hi there , I am dog

- You can't create and use an object inside the class.
  Class definitions are used only for declaring the structure of objects, not for creating instances or invoking methods.

-----------------------------------------------------------------------

# Static Functions 
-  Not associated to objects,
   associated to class itself.

eg- static myType () {
      console.log ("Animal")
          }
      console.log(Animal.identity());   // in above code  
// Output : Animal

-----------------------------------------------------------------------

# Functions

- Abstract out logic in your program.
- Take argument as an input.
- Return a value as output.
- It is like an independent program that is supposed to do something given an input.
- Functions CAN take other functions as input i.e Callbacks (further in detail)
                                    
 Syntax -  function functionName(parameters){  
                      //function body
                    return value;
                     }
// input which is written in small brackets () are called arguments   (parameters)

-----------------------------------------------------------------------

# CallBack Functions

- It is basically passing a function as argument for another function
  i.e calling one function inside another function 

  eg-   function square(a){
             return a*a
              }
        function cube(a){
             return a*a*a
              }
        function sumOfSomething (a, b, fn){   // this fn is callback 
            const val1 = fn(a);
            const val2 = fn(b);
          return val1 + val2;
            }
         console.log(sumOfSomething (2, 4, cube));      output : 72

-----------------------------------------------------------------------

# Asynchronous Function vs Synchronous Function

Synchronous - together, one after another, sequential
              Only one thing is happening at a time
Asynchronous - Opposite of synchronous, happens in parts                               // maggi example
               Multiple things are context switching with each other

         Human brain and body is single threaded 
   1. We can only do one thing at a time 
   2. But we can context switch b/w tasks, or we can delegate tasks to other people

* Until now, we’ve only seen synchronous functions

 Some examples of async functions

- setTimeout , setInterval etc

- fs.readFile  ( to read a file from your filesystem )
     Syntax :  fs.readFile(path, options, callback)      eg-   const fs = require('fs');

                                                               // Read a file asynchronously
                                                               fs.readFile('example.txt', 'utf8', (err, data) => {
                                                                 if (err) {
                                                                   console.error('Error reading file:', err);
                                                                   return;
                                                                      }
                                                                   console.log('File content:', data);
                                                                      });

                                                                  
- Fetch  ( to fetch some data from an API endpoint )
     Syntax :  fetch(resource, options)                  eg- fetch('https://jsonplaceholder.typicode.com/posts/1')
                                                             .then(response => {
                                                             if (!response.ok) {
                                                               throw new Error(`HTTP error! Status: ${response.status}`);
                                                                }
                                                               return response.json(); // Parse JSON response
                                                                })
                                                               .then(data => console.log(data))
                                                               .catch(error => console.error('Error:', error));
Callback is needed for async functions.

-----------------------------------------------------------------------

# Promises

  - A Promise represents an asynchronous operation's eventual success or failure.
  - Promises are syntactical sugar that make the code slightly more readable.
  - We create our own asynchronous function in a cleaner way using promises.( mostly we will be making a wrapper around JS given async functions )
  - When using promise, there is NO callbacks ( basically promise is a class to replace callbacks ).
  - Whenever u create a promise, you need to pass in a function as the first argument which has resolve as the first argument.

States of a Promise:

 - Pending: Initial state.
 - Fulfilled: Operation completed successfully.
 - Rejected: Operation failed.

Creating a Promise:
    const myPromise = new Promise((resolve, reject) => {
      const success = true;
      success ? resolve('Done!') : reject('Failed.');
   });

Using a Promise:
  myPromise
    .then(result => console.log('Success:', result)) // For success
    .catch(error => console.error('Error:', error)) // For failure
    .finally(() => console.log('Completed!')); // Runs always

Chaining Promises:
 - You can chain multiple .then() calls for sequential operations.
       Promise.resolve(5)
         .then(num => num * 2)
         .then(num => num + 3)
         .then(result => console.log(result)); // Output: 13

Promise Methods:
  - Promise.all(): Resolves when all promises resolve.
  - Promise.race(): Resolves as soon as one promise resolves.
  - Promise.allSettled(): Returns results for all settled promises.
  - Promise.any(): Resolves with the first successful promise.

Benefits:
  - Avoids callback hell.
  - Clean error handling with .catch() or try...catch.

-----------------------------------------------------------------------

# Async/Await 

  - async/await simplifies working with promises by making asynchronous code look and behave like synchronous code.
  - This is also just a syntactical sugar ( means the work is still same in callbacks , promises and async/await ).
  - Usually used on the caller side, not on the side where you define an async function

Key Points

  async Function:  Declares a function as asynchronous.
                   Automatically returns a promise.

  await:  Pauses the execution of the function until the promise resolves or rejects.
          Can only be used inside an async function.(Any function that wants to use await, needs to be async)
          Rather than using the .then syntax, we add await before and get the final value in the variable.

Basic Syntax

async function example() {
  try {
    const result = await someAsyncFunction();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}
__________________________________
Example: Fetching Data

   const fetchData = async () => {
     try {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
       const data = await response.json();
       console.log('Data:', data);
     } catch (error) {
       console.error('Error:', error);
     }
   };
   fetchData();
____________________________________
Sequential vs. Parallel Execution

Sequential (One After Another):

   async function sequential() {
     const first = await Promise.resolve('First');
     const second = await Promise.resolve('Second');
     console.log(first, second);
   }

Parallel (Concurrent):

   async function parallel() {
     const [first, second] = await Promise.all([
       Promise.resolve('First'),
       Promise.resolve('Second'),
     ]);
     console.log(first, second);
   }
______________________________________

Benefits
  - Cleaner syntax compared to .then() chaining.
  - Easier error handling with try...catch.
  - Improves readability of asynchronous code.
