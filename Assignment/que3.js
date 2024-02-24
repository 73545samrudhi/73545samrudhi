//Given a string variable, perform the following operations:
//Concatenate it with another string.
//Extract a substring from a specific index to another.
//Convert it to uppercase.

let str = "Masai";

let concatenatedStr = str + " School";

let substring = concatenatedStr.substring(6, 12); 

let uppercaseStr = concatenatedStr.toUpperCase();

console.log("Original String:", str);
console.log("Concatenated String:", concatenatedStr);
console.log("Substring:", substring);
console.log("Uppercase String:", uppercaseStr);
