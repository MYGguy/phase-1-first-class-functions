// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
// function Tuesday() {
//   console.log("Go for a five-mile run");
//   console.log("Swim 40 laps");
// }

// function Wednesday() {
//   console.log("Go for a five-mile run");
//   console.log("Go for a five-mile run");
// }

// function Thursday() {
//   console.log("Go for a five-mile run");
//   console.log("Pump iron");
// }

// function Friday() {
//   console.log("Go for a five-mile run");
//   console.log("Swim 40 laps");
// }

// function runFiveMiles() {
//   console.log("Go for a five-mile run");
//   // return "Go for a five-mile run";
// }
// function liftWeights() {
//   console.log("Pump iron");
// }
// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   return exerciseRoutine(liftWeights);
// }

// Monday();

// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// const hi = Monday;

// console.log(hi);
// hi;

// function morningRoutine(exercise) {
//   let breakfast;

//   if (exercise === liftWeights) {
//     breakfast = 'protein bar';
//   } else if (exercise = swimFortyLaps) {
//     breakfast = 'kale smoothie';
//   } else {
//     breakfast = 'granola'
//   };

//   exerciseRoutine(exercise);

//   return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   };

// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise;

// function greet(name, callback) {
//   console.log('Hello ' + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye);

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction () {
  return function namedFunction() {
    console.log('hi');
  }
}

function returnsAnAnonymousFunction() {
  return (() => console.log('hi'));
}

returnsAnAnonymousFunction();