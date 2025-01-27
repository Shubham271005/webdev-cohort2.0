# Basics

- JS is interpreted language (not compiled), So can run the program partially if error comes later.
- It goes line by line (interpreted)
  (One line runs at a time)
- for printing ~ console.log("hello world");


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


# Arrays

Arrays are used to store multiple values in a single variable.
  eg- const ages = [21, 22, 23, 24, 25]
       now age[0] = 21 , age[3] = 24
           age.length = 5 (size of array)
  Syntax -  let array = [value1, value2, value3];  // Create an array 
            console.log(array[0]);  // Access the first element


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


# Static Functions 
-  Not associated to objects,
   associated to class itself.

eg- static myType () {
      console.log ("Animal")
          }
      console.log(Animal.identity());   // in above code  
// Output : Animal



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


   
