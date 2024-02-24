//Create an array and demonstrate how to:
//Add elements to the end.
//Remove elements from a specific index.
//Check if a specific element exists in the array.

let myArray = [100, 200, 300, 400, 500];

myArray.push(60);
myArray.push(70);

let removedElement = myArray.splice(40, 20); 


let elementExists = myArray.includes(700);

console.log("Array:", myArray);
console.log("Removed Element:", removedElement);
console.log("Does 40 exist in the array?", elementExists);
