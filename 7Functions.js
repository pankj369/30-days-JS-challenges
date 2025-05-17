//!=how to declare function || //!function without parameter and return
// function functionName(){
//   let a=2;
//   let b=3;
//   let c=a*b;
//   console.log(c)
// }
// functionName()

// !function with returning value
// function functionName() {
//   let a = 2;
//   let b = 3;
//   let c = a * b;
//   return c;
// }
// console.log(functionName())
// !function with parameter 

// function areaOfCircle(r){//here 'r' is parameter1 
// let area=Math.PI*r*r
// return area;
// }
// console.log(areaOfCircle(10))//during calling or invoking one arguments needs so here '10' is an argument
// !functions with two parameters
//function without parameter doesn't take input , so lets make a function with parameters
// function sumTwoNum(num1, num2){  
//   let sum=num1+ num2
//   // console.log(sum)
//   return sum;
// }
// // sumTwoNum(10,20)
// console.log(sumTwoNum(10,20))
// !functions with multiple parameters
// function greetUser(name, age, city) {
//   console.log(`Hello ${name}, you are ${age} years old and live in ${city}.`);
// }

// // Calling the function
// greetUser("Pankaj", 20, "BIHAR");
// ! also
//the function takes array as a parameter and sum up the numbers in the array
// function sumArrayValues(arr){
//   let sum=0;
//   for(let i=0; i<arr.length;i++){
//     sum+=arr[i]
//   }
//   return sum;
// }
// const numbers=[1,2,3,4,5,6,7,8]
// console.log(sumArrayValues(numbers))
// !function with unlimited parameters
// ?In regular function
// function sumAll(){ //arguments is an array like object (available only inside regular functions,it holds all the passed arguments, no matter how many you give)
//   // this is not work in arrow function, as they don't have their own arguments object
//   let total=0;
//   for(let i=0;i<arguments.length;i++){
//     total+=arguments[i]
//   }
//   return total;
// }
// console.log(sumAll(1,2,3,3,4,4,4,4,4,4,55,5,55,5,666666666666,6,7,88888888,8888))
//? functions with ulimited parameter 
// !arrow functions
// function sumAll(...nums){ //here ...nums is the rest parameter that gathers all arguments into an array
//   //then loop through the array and use the values as needed
//   let total=0;
//   for(let num of nums){
//     total+=num;
//   }
//   return total;
// }
// console.log(sumAll(4,5,6,8,7,9,2,1,6,4,5,8,9,7,3,1,2,4,5,4,7,8,9,3,6,4,45,8,458,45,4,85,48,54,52,8,2))

// !Anonymous function = is a function without a name, often used as a value(assigned to a variables) and as a callback(setTimeout, array methods)
// const greet=function(name){
//   console.log("Hello, "+name+"!")
// }
// greet("Pankaj")
//In this- function(name){...} is an anonymous function-no name after function
// it's assigned to the variable greet.
// when you call greet("Pankaj"), it runs the functions
//?anonymous function as a callback
// setTimeout(function(){
//   console.log('This runs after 3 seconds')
// },3000)
// ! Expression function

// const greet=function(name){ //anonymous function
//   console.log("Hello, "+name+"!")
// }
// greet('Pankaj')

// const sum=function sumNum(){ // named functions without arguments and parameters
//   let a=3;b=5;
//   let c =a+b;
//   console.log(c)
// }
// sum()

// named function with arguments and parameters

// const product=function productNum(a,b){
//   let c=a*b;
//   console.log(c)
// }
// product(5,6)

// !Self invoking functions
// (function(){// function is wrapped in () to treat it like an expression
//   let a=4; b=6;c=a+b;
//   console.log(c)
// })()
//?modern self invoking arrow function
// (()=>{
//   let a=4; b=6;c=a+b;
//   console.log(c)
// })()
//!Arrow function
// const greet=(name)=>{
//   console.log("Hello, "+name+"!")
// }
// greet("Pankaj")

// const changeToUpperCase=arr=>{
//   const newArr=[]
//   for(let item of arr){
//     newArr.push(item.toUpperCase() )
//   }
//   return newArr
// }
// const countries =['Finland','sweden','norway','India']
// console.log(changeToUpperCase(countries))

// !=====Excercise: Level 1==========

// !Declare a function fullName and it print out your full name.

// function fullName(firstName,lastName){
// return firstName +" "+ lastName
// }
// console.log(fullName('pankaj','singh'))

// function addNumbers(num1,num2){
//   let sum= num1+num2;
//   return sum;
// }
// console.log(addNumbers(10,20))

// function areaOfRectangle(){
//   let length=4; width=5; 
//   let perimeter=length*width;
//   return perimeter;
// }
// console.log(areaOfRectangle())

// function bmi(){
//   let weight=50 //in kg
//   let height= 5.5 //in feet
//   let heightInMeters= height*0.3048; //convert feet to meters
//   let bmiCal=weight/(heightInMeters*heightInMeters);
//   return bmiCal;
// }

// // console.log(bmi())

// let bmi1=bmi()
// console.log(bmi1.toFixed(2))
// if(bmi1<18.5){
//   console.log('Underweight')
// } else if(bmi1>=18.5&& bmi1<= 24.9){
//   console.log('normal weight')
// }else if(bmi1>=25 && bmi1<=29.9){
//   console.log('overweight')
// }else if(bmi1 >=30){
//   console.log('Obese')
// }else{
//   console.log('invalid weight')
// }

// function checkSeason(month) {
//   month = month.toLowerCase();

//   if (month === "march" || month === 'april' || month === "may") {
//     console.log('spring season')
//   } else if (month === 'june' || month === 'july' || month === 'august') {
//     console.log('summer season')
//   } else if (month === 'september' || month === 'october' || month === 'november') {
//     console.log('Autumn season')
//   } else if (month === 'december' || month === 'january' || month === 'february') {
//     console.log('winter season')
//   } else {
//     console.log('Invalid season')
//   }
//   return month;
// }
// checkSeason('november')

// function findMax(a,b,c){
//   let max;
// if(a>=b &&a>=c){
//   max=a;
// }else if(b>=a && b>=c){
//   max =b
// }else{
//   max=c;
// }
// return max;
// }
// console.log(findMax(34,56,0))

// !=======level:2==============

// function sloveLinEquation(a = 2, b = 3, c = 4) {
//   let discriminant = b * b - 4 * a * c;
//   if (discriminant > 0) {
//     let x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
//     let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
//     return { x1, x2 }
//   } else if (discriminant === 0) {
//     let x = -b / (2 * a)
//     return { x }
//   } else {
//     return 0;
//   }
// }
// console.log(sloveLinEquation())
// console.log(sloveLinEquation(1,4,4))

// function printArray(arr){
//   for(let i=0; i<=arr.length-1;i++){
//     console.log(arr[i])
//   }
//   // return arr;
// }
// printArray([1,2,3,4,5,6,7,8,9,0])

// function showDateTime(){
// let now=new Date();
// let date=now.toLocaleDateString();
// let time=now.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'});
// return `${date} ${time}`
// }
// console.log(showDateTime())

// function swapValues(){
//   let a=10;
//   let b=20;
//   [a,b]=[b,a]
//   return [a,b]
// }
// console.log(swapValues())

// function reverseArray(array) {
//   let newArr = []
//   for (let i = array.length - 1; i >= 0; i--) {
//    newArr.push(array[i])
//   }
//   return newArr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))

// function capitalizeArray(newArr){
//   for (let i = 0; i<=newArr.length-1;i++){
//     newArr[i] = newArr[i].toUpperCase()
//   }
//   return newArr;
// }
// console.log(capitalizeArray(['a', 'b', 'c']))


// let newItems = []
// function addItem(newItem) {
//   newItems.push(newItem)
//   return newItems;
// }
// console.log(addItem('ram'))
// let items = ['books', 'pen', 'pencil', 'Eraser', 'notbook']
// function removeItem(index) {
//   if (index >= 0 && index < items.length) {
//     for (let i = index; i < items.length - 1; i++) {
//       items[i] = items[i + 1]
//     }
//     items.length--;
//   }
//   return items;
// }
// console.log(removeItem(2))


// function sumOfNumbers(num){
// let sum =0;
// for(let i=0;i<=num;i++){
//   sum+=i;
// }
// return sum;
// }
// console.log(sumOfNumbers(5))

// function sumOfOdds(num){
//   let sum=0;
//   for(i=1;i<=num;i++){
//   if(i%2!==0){
//     sum+=i;
//   }
//   }
//   return sum;
// }
// console.log(sumOfOdds(56))

// function sumOfEven(num){
//   let sum = 0;
//   for(let i=0;i<=num;i++){
//     if(i%2===0)
//       sum+=i;
//   }
//   return sum;
// }
// console.log(sumOfEven(12))

// function evernsAndOdds(n){
//   let evens=0; odds=0;
//   for(let i=0;i<=n;i++){
//     if(i%2===0){
//       evens+=i;
//     }else{
//       odds+=i;
//     }
//   }
//   console.log(`The number of odds are ${odds}`)
//   console.log(`The numbers of evens are ${evens}`)
// }
// evernsAndOdds(10)

// function sum(...args){
//   let total=0;
//   for(let num of args){
//     total +=num;
//   }
//   return total;
// }
// console.log(sum(1,2,3))

// function randomUserIp(){
//   return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`
// }
// console.log(randomUserIp())

// function randomMacAddress(){
//   let mac=''
//   const hex='0123456789ABCDEF'
//   for(let i=0; i<6;i++){
//     mac+=hex[Math.floor(Math.random()*16)]  
//     mac+=hex[Math.floor(Math.random()*16)]
//     if(i!==5) mac+= ":"
//   }
//   return mac;
// }
// console.log(randomMacAddress())

function randomHexaNumberColorGenerator(){
  let hex='#'
  const chars='0123456789abcdef'
  for(let i=0;i<6;i++){
    hex+=chars[Math.floor(Math.random()*16)]
  }
  return hex
}
// console.log(randomHexaNumberColorGenerator())

// function userIdGenerator() {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   let id = ''
//   for (let i = 0; i < 7; i++) {
//     id += chars[Math.floor(Math.random() * chars.length)]
//   }
//   return id;
// }
// console.log(userIdGenerator())

// !===========Level:3====================
// function userIdGeneratedByUser() {
//   let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let charLength = parseInt(prompt("Enter number of characters:"));
//   let idCount 7= parseInt(prompt("Enter number of IDs to generate:"));
//   let ids = [];

//   for (let i = 0; i < idCount; i++) {
//     let id = '';
//     for (let j = 0; j < charLength; j++) {
//       id += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     ids.push(id);
//   }

//   return ids.join('\n');
// }
// console.log(userIdGeneratedByUser())


function rgbcolorGenerator(){
  let r=Math.floor(Math.random()*256)
  let g=Math.floor(Math.random()*256)
  let b=Math.floor(Math.random()*256)
  return `rgb(${r},${g},${b})`

}
// console.log(rgbcolorGenerator())

// function arrayOfHexaColors(count){
//   const hexColors=[];
//   for(let i=0; i<count; i++){
//     hexColors.push(randomHexaNumberColorGenerator())
//   }
//   return hexColors;
// }
// console.log(arrayOfHexaColors())

// function arrayOfRgbColors(count){
//   const rgbColors = []
//   for(let i=0; i<count; i++){
//     rgbColors.push(rgbcolorGenerator())
//     }
//     return rgbColors;
// }
// console.log(arrayOfRgbColors())

function convertHexaToRgb(hex){
  let r=parseInt(hex.slice(1,3),16)
  let g=parseInt(hex.slice(3,5), 16)
  let b= parseInt(hex.slice(5,7),16)
  return `rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb())