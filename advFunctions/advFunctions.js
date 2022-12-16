//RECURSION

//Write a function sumTill(n) that will sum till n. (Must use Recursion)
// example inputs and outputs
// sumTill(1) //1
// sumTill(2) // 2 + 1 = 3
// sumTill(3) // 3 + 2 + 1 = 6
// sumTill(100) // 100 + 99 + 98 ... + 2 + 1 = 5050
// BONUS 1 point extra credit: There is a much simpler way to do this! (Hint: it is NOT a loop, or recursion) Write a function that is faster than recursion.

function sumTill(n){
    let ans;
    if(n == 1) {
        return 1;
    }
    return (ans = sumTill(n-1)+n);
}

console.log(sumTill(5)); //15

let data = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'retreiver', parent: 'dogs' },
    { id: 'corgi', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
    { id: 'maineCoon', parent: 'cats' }
];

//write a function: makeTree(obj) that takes a flat data stucture, as seen above, and return a tree strucuture as seen below. Must use recursion.

function makeTree(arr, parent) {
    return arr
    .sort((data) => data.parent === parent)
    .display(
        (tree, {id}) => ({
            ...tree,
            [id]: makeTree(arr, id),
        }),
        {},
    );
}

console.log(makeTree)

console.log(
    //makes the output readable... Handy trick for outputing objects in the console.
    JSON.stringify(
        makeTree(data, null)
        , null, 2
    )
)

let reutrn = {
    animals: {
        mammals: {
            dogs: {
                labrador: {},
                retreiver: {},
                corgi: {},
            },
            cats: {
                persian: {},
                siamese: {},
                maineCoon: {}
            }
        }
    }
}


// SCOPES and CLOSURES

//write 2 functions to be used as a filter for Array.filter()
// Function between(a, b) should take two numbers and filter an array of numbers to only values between the function parameters
//function inArr() shoud take an array of numbers and filter an array of numbers to ONLY numbers that are in the array passes to inArr()
//Hint: both of these functions will return functions for the Array.filter() to use.


function between(a, b){
    return (arr) => {
        let showArr = [arr];
        if (showArr[showArr.length - 1] >= a && showArr[0] <= b) {
            return showArr;
        }
    }
}

function inArr(arr) {
    let numHolds = [];
    return (finArr) => {
        for (let i = 0; i < arr.length; i++) {
            if (finArr === arr[i]) {
                numHolds.push(finArr);
                return numHolds;
            }
        }
    }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//uncomment out these lines when working on and turning in this section. They are currently comented out due to errors
// console.log(arr.filter(between(2, 7))); // 2, 3, 4, 5, 6, 7

// console.log(arr.filter(inArr([4, 5, 7, 8, 9, 12, 14]))) // 4, 5, 7, 8, 9

// REST PARAMETERS and SPREAD Syntax

//write a function, sumAll() that can take any number of parameters and add them all together
// Must use Rest Parameters (Rest Arguments)
function sumAll() {
    const sum = Array.from(arguments);
    return sum.reduce((a,b) => a+b );
}

console.log('sumAll', sumAll(1)) // 1
console.log('sumAll', sumAll(1, 2)) // 3
console.log('sumAll', sumAll(1, 2, 3)) // 6

// Use the spread operator to pass arr into your sumAll function

console.log('sumAll Spread', sumAll());

//write a function combineArr() that accepts 2 arrays, and combines them into a single array using the spread operator

function combineArr(arr1, arr2) {
   const comArr = [...arr1, ...arr2];
   return comArr;
}

let arrFirst = [1, 2, 3];
let arrSecond = [4, 5, 6];

console.log(combineArr(arrFirst, arrSecond)) // [1, 2, 3, 4, 5, 6]

export {
    sumTill,
    makeTree,
    between,
    inArr,
    sumAll,
    combineArr
}