let myName = 'Javeria';
let lastName = 'Hassan';
let array = [1,2,3,4,5];
let x = 2;
let y  = 8;

console.log("isEqual: " , myName =="Javeria Hassan");
console.log("isNotEqual: " , myName !="Javeria Hassan");
console.log("LowerCase: " , myName == myName.toLowerCase());

console.log("Let x = ", x , " , y = ",y);
console.log("Equality: " , x == y);
console.log("In-Equality: " , x != y);
console.log("Greater than: " , x > y);
console.log("Lower than: " , x < y);
console.log("Lower than or Equal to: " , x <= y);
console.log("Greater than or Equal to: " , x >= y);

console.log("AND Operator: " , myName =="Javeria" && lastName =="Hassan");
console.log("OR Operator: " , myName =="Javeria Hassan" || lastName == "Hassan");

console.log("Is item exist in array: " , array.includes(2));
console.log("Is item exist in array: " , array.includes(6));