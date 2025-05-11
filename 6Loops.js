// for(let i=0; i<=10;i++){
//   console.log(i)
// }
// let i=0
// while(i<=10){

//   i++;
//   console.log(i)
// }

// do{
//   i++
//   console.log(i)
// }while(i<=10)

// for(i=10; i>=0;i--){
// console.log(i)
// }

// for (i = 1; i <= 7; i++) {
//   let pattern = "";
//   for (j = 1; j <= i; j++) {
//     pattern += "# ";
//   }
//   console.log(pattern)
// }

// for (let i = 6; i >= 1; i--) {
//   console.log("* ".repeat(i));
// }

// for (i = 8; i>= 1; i--) {
//   let pattern = ''
//   for (j = 1; j <= i; j++) {
//     pattern += '* '
//   }
//   console.log(pattern)
// }

// for(i=0;i<=10;i++){
//   console.log(`${i} x ${i} = ${i*i}`)
// }

// for(i=0;i<=10;i++){
//   console.log(` ${i}    ${i**2}   ${i**3}`)
// }


// for(i=0; i<=100; i++){
//   if(i%2===0)
//     console.log(`Even numbers ${i}`)
// }


// for(i=0;i<=100;i++){
//   if(i%2!==0)
//     console.log(`Odd number: ${i}`)
// }

// for (let i = 2; i < 100; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`Prime Number: ${i}`)
//   }
// }

// let sum=0;
// for (let i=0;i<=100;i++){
//   sum+=i;
// }
// console.log(`The sum of numbers from 0 to 100 is: ${sum}`)

// let evenSum=0;
// let oddSum=0;

// for(i=0;i<=100;i++){
//   if(i%2===0){
//    evenSum+=i;
//   }else{
//     oddSum+=i;
//   }

// }
// console.log(`The sum of even numbers from 0 to 100: ${evenSum}, And the sum of odd numbers form 0 to 100: ${oddSum} `)


// let evenSum=0;
// let oddSum=0;

// for(i=0;i<=100;i++){
//   if(i%2===0){
//    evenSum+=i;
//   }else{
//     oddSum+=i;
//   }

// }
// console.log(`The sum of even numbers from 0 to 100: ${evenSum}, And the sum of odd numbers form 0 to 100: ${oddSum} `)

// let sumArray=[evenSum,oddSum]
// console.log(sumArray);

// !Develop a small script which generate array of 5 random numbers

// let randomNumber=[]

// for(i=1;i<=5;i++){
//  let randomNum=Math.floor(Math.random()*101)
//  randomNumber.push(randomNum)
// }
// console.log(randomNumber)

// !Develop a small script which generate array of 5 random numbers. numbers must be unique

// !Develop a small script which generate a six characters random id:
// let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// let randomID=''
// for(let i=0; i<6; i++){
//   let randomIndex=Math.floor(Math.random()*characters.length)
//   randomID+=characters[randomIndex]
// }
// console.log(randomID)

// ! Develop a small script which generate any number of characters random id:
// let length=10;
// let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let randomId='';
// for(let i=0;i<=length;i++){
//   let randomIndex=Math.floor(Math.random()*characters.length)
//   randomId+=characters[randomIndex]
// }

// console.log(randomId)

// let hex='#'
// let hexChars='0123456789abcdef'
// for(let i=0;i<6;i++){
// let randomHexagonal=Math.floor(Math.random()*hexChars.length)
// hex+=hexChars[randomHexagonal]
// }
// console.log(hex)

// let r=Math.floor(Math.random()*256)
// let g=Math.floor(Math.random()*256)
// let b=Math.floor(Math.random()*256)
//  let rgbColor='rgb('+r+","+g+","+b+")"
//  console.log(rgbColor)


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// let countryNameLength = []
// for (let i = 0; i < countries.length; i++) {
//   countryNameLength.push(countries[i].length)
// }
// console.log(countryNameLength)

// let countryDetails=[]
// for(let i=0;i<countries.length; i++){
//   let abbreviation=countries[i].slice(0,3).toUpperCase();
//   let length=countries[i].length;
//   countryDetails.push([countries[i],abbreviation, length])
// }
// console.log(countryDetails)


// let countriesWithLand=[]
// for(let i=0; i<countries.length;i++){
//   if(countries[i].toLowerCase().includes('land')){
//   countriesWithLand.push(countries[i])
//   }
// }
// if(countriesWithLand.length>0){
//   console.log(countriesWithLand)
// }else{
//   console.log('All these countries are without land')
// }

// let countriesEndingWithIa = []
// for (i = 0; i < countries.length; i++) {
//   if (countries[i].toLowerCase().endsWith('ia')) {
//     countriesEndingWithIa.push(countries[i])
//   }
// }
// if (countriesEndingWithIa.length > 0) {
//   console.log(countriesEndingWithIa)
// } else {
//   console.log("These are countries ends with ia")
// }


// let longest=countries[0]
// for(let i=1; i<countries.length;i++){
//   if(countries[i].length>longest.length){
//     longest=countries[i]
//   }
// }
// console.log(longest)

// let fiveCharCountries=[]
// for(let i=0;i<countries.length;i++){
//   if(countries[i].length===5){
//     fiveCharCountries.push(countries[i])
//   }
// }
// console.log(fiveCharCountries)

let webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

// let longestWord=webTechs[0]
// for(let i=1; i<webTechs.length;i++){
//   if(webTechs[i].length>longestWord.length){
//   longestWord=  webTechs[i];
//   }
// }
// console.log(longestWord)


// let webTechsInfo = []
// for (let i = 0; i < webTechs.length; i++) {
//   webTechsInfo.push([webTechs[i], webTechs[i].length])
// }
// console.log(webTechsInfo)


let mernStack = ["MongoDB", "Express", "React", "Node"]
// let acronym=''
// for(let i=0;i<mernStack.length;i++){
//   acronym+=mernStack[i][0];
// }
// console.log(acronym)


// let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for(let tech of techs){
//   console.log(tech)
// }


// let fruits = ['banana', 'orange', 'mango', 'lemon'];
// let reverseFruits = []
// for (let i = fruits.length - 1; i >= 0; i--) {
//   reverseFruits.push(fruits[i])
// }
// console.log(reverseFruits)


// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ];

// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j].toUpperCase())
//   }
// }

// !===========Excercise: Level-3====================

// let copyCountries = []
// for (let i = 0; i < countries.length; i++) {
//   copyCountries.push(countries[i]);
// }
// copyCountries.sort()
// console.log(copyCountries)


// webTechs.sort();
// mernStack.sort();
// console.log(webTechs);
// console.log(mernStack);


// let landCountries=[]
// for(let i=0;i<countries.length;i++){
//   if(countries[i].includes('land')){
//     landCountries.push(countries[i])
//   }
// }
// console.log(landCountries)

// let maxCharCountry=countries[0]
// for(let i=1; i<countries.length;i++){
//   if(countries[i].length>maxCharCountry.length){
//   maxCharCountry=countries[i]
// }
// }
// console.log(maxCharCountry)

// let fourCharCountries = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length === 4) {
//     fourCharCountries.push(countries[i]);
//   }
// }
// console.log(fourCharCountries);

// let multipliCountries = []
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].includes(' ')) {
//     multipliCountries.push(countries[i])
//   }
// }
// console.log(multipliCountries)

let reverseCapitalCountries=[]
for(let i=countries.length-1;i>=0;i--){
  reverseCapitalCountries.push(countries[i].toUpperCase())
}
console.log(reverseCapitalCountries)