
// the receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(cb) {
  return cb()
};
// Simpler than it sounds. taking the CB function as
//an argument just means the function invocation is passed
//as a parameter. The () invokes the function INSIDE the main function,
// and the result is placed as an argument inside the main function parameter.
// I think?


// The returnsANamedFunction function should:

// take no arguments
// return a named function
// exerciseRoutine(function () { //essentially postRunActivity is in these ()
//   console.log("Stretch! Work that core!");


function returnsANamedFunction() {
  return function cb2() { }
};


// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function
function returnsAnAnonymousFunction() {
  return function () { }
};

// function Monday() {
//   console.log("Go for a five-mile run");
//   console.log("Pump iron");
// }

// function Tuesday() {
//   console.log("Go for a five-mile run")
//   console.log("Swim for 40 laps");
// };

// function Wednesday() {
//   console.log("Go for a five-mile run");
//   console.log("Go for a five-mile run");
// };

// function Thursday() {
//   console.log("Go for a five-mile run")
// };

// function Friday() {
//   console.log("Go for a five-mile run")
//   console.log("Swim 40 laps");

// };

// function runFiveMiles() {
//   console.log("Go for a five-mile run");

// }


// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function Monday() {
//   runFiveMiles()
//   postRunActivity();

// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles(); //console.log("Go for a five-mile run")
//   postRunActivity();
// }

// exerciseRoutine(function () { //essentially postRunActivity is in these ()
//   console.log("Stretch! Work that core!");

//the callback
//runFiveMiles(); //console.log("Go for a five-mile run")
//postRunActivity();
//});


/*arrow function
exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});
*/















