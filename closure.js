/*Notes: In normal execution context, once a function stops executing its memory is destroyed. If closures did not exist, the memory of outer
and outerVar would be destroyed after the line "return inner". 
Example workflow if closure did not exist: When the control sees closure = outer() it executes outer. It creates outerVar, and executes the code till
"return inner". Then the memory of outer is destroyed, When "closure()" is called, inner will start executing but as the memory of outer is gone, 
outerVar will not be found and a reference error will occur at console.log(outerVar);

Clousre allows the control to know that the execution context needs to be saved to the Heap for future calls and does not destroy the memory*/
function outer() {
  let outerVar = "This is the outer scope";
  function inner() {
    console.log(outerVar);
    outerVar = "Updated";
  }
  return inner;
}

const closure = outer();
closure();
closure();
closure();
closure();

