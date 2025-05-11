// let arr = Array()
// console.log(arr)
// let arr2 = []
// console.log(arr2)
// let arr4=Array(3) 

// console.log(arr4)
// let arr3 = [45, 12, 56, 87, 95, 123, 46546, 4564648984, 21543251]
// console.log(arr3.length)


// let js='pankj'
// console.log(js.split('')) //[ 'p', 'a', 'n', 'k', 'j' ]
// console.log(js.split(' ')) //[ 'pankj' ] //how this happen

// let companies='facebook, amzon, apple, google, microsoft, mithilanchal makhana';
// console.log(companies.split(' ,')) // ['facebook', 'amzon', ' apple', ' google', ' microsoft', ' mithilanchal makhana']
// console.log(companies.split(',')) // ['facebook', 'amzon', ' apple', ' google', ' microsoft', ' mithilanchal makhana']

// console.log(companies.length)

// arr3[0]=1321121; //modifing an array
// console.log(arr3) //45 becomes 1321121

// console.log(arr4.fill('p'))


// console.log(Array.isArray(companies)) //false
// console.log(Array.isArray(arr3)) //true

// let maang=['mircrosoft','apple','amazon','netflix','google'];
// console.log(maang.join())//by default
// console.log(maang.join('')) 
// console.log(maang.join(' '))
// console.log(maang.join(' , '))
// console.log(maang.join(' BESTCODER '))

// console.log(maang.slice(0, maang.length))
// console.log(maang.slice(0, maang.length-1))
// console.log(maang.slice(1,3))

// console.log(maang.splice(2,4))
// console.log(maang.splice(2,4,'google','microsoft'))

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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let arr = [];
console.log(arr);
let number = [1, 2, 3, 4, 5, 6, 7]
console.log(number)
console.log(number.length - 1)
console.log(number[0]) //first item, middle item, and last item
console.log(number[3])
console.log(number[number.length - 1]) //last item

let mixedDataTypes = ['Pankaj', 20, null, undefined, true, {}, ['hari']]
console.log(mixedDataTypes.length) //length of array

// !Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// let companies=['facebook', 'google', 'microsoft', 'apple', 'amazon','IBM','oracle']
// console.log(companies)
// console.log(companies.length)
// // console.log(companies[0]) //wrong
// let middleIndex=Math.floor(companies.length/2)
// console.log(middleIndex)
// console.log(companies.length-1)
// for (let itcompany of companies) {
//   console.log(itcompany.toUpperCase());
// } 

// let companiesSentence=companies.slice(0,-1).join(', ')+ ' and ' + companies[companies.length-1] +' are big IT companies.'
// console.log(companiesSentence)


// !Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// let userInput = prompt('Enter a company name to search:');
// let formattedInput = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1).toLowerCase();

// if (itCompanies.includes(formattedInput)) {
//   console.log(`${formattedInput} exists in the array.`);
// } else {
//   console.log(`${formattedInput} is not found in the array.`);
// }

//! Filter out companies which have more than one 'o' without the filter method

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// let companiesWithMultiplieOs=[];

// for (let company of itCompanies){
//   let count =0;
//   for (let char of company.toLowerCase()){
//     if(char==='o'){
//       count++;
//     }
//   }
//   if (count>1){
//     companiesWithMultiplieOs.push(company)
//   }
// }
// console.log(companiesWithMultiplieOs)


// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(0,3))
// console.log(itCompanies.slice( - 3))
// console.log(Math.floor(itCompanies.length/2))


// let companies1 = [...itCompanies];
// companies1.shift();
// console.log("After removing first company:", companies1)
// // Remove the middle IT company or companies
// let companies2 = [...itCompanies];
// if (companies2.length % 2 === 0) {
//   companies2.splice(midIndex - 1, 2);
// } else {
//   companies2.splice(midIndex, 1);
// }
// console.log("After removing middle company/companies:", companies2);

// // Remove the last IT company
// let companies3 = [...itCompanies];
// companies3.pop();
// console.log("After removing last company:", companies3);

// // Remove all IT companies
// let companies4 = [...itCompanies];
// companies4.length = 0;
// console.log("After removing all companies:", companies4);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift("Meat")
}

if (!shoppingCart.includes('Sugur')) {
  shoppingCart.push("Sugur")
}
const honeyIndex = shoppingCart.indexOf('Honey')
if (honeyIndex !== 1) {
  shoppingCart.splice(honeyIndex, 1)
}

const teaIndex = shoppingCart.indexOf("Tea")
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = [' Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]
// const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort())
console.log(ages[0])
console.log(ages[ages.length - 1])

const mid = Math.floor(ages.length / 2)
const median = ages.length % 2 === 0
  ? (ages[mid - 1] + ages[mid]) / 2
  : ages[mid]
  console.log(mid)
  console.log(median)

  const sum=ages.reduce((acc, val)=>acc+val,0)
  const average=sum/ages.length
  console.log(sum)
  console.log(average)

  let maxAge=25;
  let minAge=19;
  const range=maxAge-minAge;
  console.log(range)

const minDiff=Math.abs(minAge-average)
const maxDiff=Math.abs(maxAge-average)
console.log(minDiff,maxDiff)


const first10Countries=countries.slice(0,10);
console.log(first10Countries);


const midIndex1=Math.floor(countries.length/2)
const middleCountries=countries.length%2===0
?[countries[midIndex1-1], countries[midIndex1]]
:[countries[midIndex1]]
console.log(midIndex1)
console.log(middleCountries)

const firstHalf=countries.slice(0,Math.ceil(countries.length/2))
const secondHalf=countries.slice(Math.ceil(countries.length/2))
console.log(firstHalf,secondHalf)