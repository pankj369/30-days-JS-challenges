//!================Excercise: Level 1============

let firstName = 'Pankaj',
  lastName = 'Singh',
  country = 'India',
  city = 'Darbhanga',
  age = 20,
  isMarried = false
year = false

console.log(typeof (firstName))
console.log(typeof (lastName))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof (year))


console.log(typeof ('10' === 10))
console.log(parseInt('9.8' == 10))

let isMarried1 = true
console.log('start saving')
let isStudent = true
console.log('study hard')
let isAthelete = true
console.log('workout hard')

isMarried1 = false
console.log('get married asap')
isStudent = false
console.log('still work hard in ur job')
isAthelete = false
console.log('exercise daily atleast 30 min')

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log("There is no 'on' in both dragon and python") //false

let date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())

//!===========Excercise: Level-1=================
// let base =parseInt(prompt('Enter the base of triangle: '))
// let height=parseInt(prompt('Enter the height of triangle: '))

// let area=0.5*base* height
// alert(`The area of the triangle is: ${area}`)

// let a=parseInt(prompt('Enter the side a: '))
// let b=parseInt(prompt('Enter the side b: '))
// let c=parseInt(prompt('Enter side c: '))

// let perimeter=a+b+c;

// alert(`The perimeter of the triablge is ${perimeter}`)

// let length=parseInt(prompt('Enter the length of the rectangle: '))
// let width=parseInt(prompt('Enter the width of the rectangle: '))
// let perimeter=2*(length+width);
// alert(`The perimeter of rectangle: ${perimeter}`)

// let radius=parseInt(prompt('Enter the radius of the circle: '))
// const PI=3.14
// let area=PI*radius*radius
// alert(`The area of the circle is: ${area}`)
// let circumference=2*PI*radius
// alert(`The circumference fo the circle: ${circumference}`)

// !Calculate the slope, x-intercept and y-intercept of y = 2x -2

//! Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// !Compare the slope of above two questions.

//!Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.


// let hrs=parseInt(prompt(`Enter the hours: `))
// let rph=parseInt(prompt(`Enter the rate per hour: `))
// let pay=hrs*rph
// alert(`weekly earning is: ${pay}`)

// let name_length =5
// name_length>7 ? 
// console.log(`${name_length} your name length is too long`) :
// console.log(`${name_length} your name length is too short`)

// let firstName1 = 'Pankaj'
// let lastName1 = 'singh'
// firstName1.length > lastName1.length
//   ? console.log(`your firstName, ${firstName1} is greater than your familyName, ${lastName1}`)
//   : console.log('your family name is greather than your firstname')

// let myAge=20;
// let yourAge=22;

// let olderAge= yourAge-myAge;
// console.log(`I am ${olderAge} years elder than you `)

// let birth_yr=prompt('Enter ur birth year:')
// birth_yr>18
// ? alert('You can drive')
// :alert ('wait some time to drive')

// let yrs_live=prompt('Enter the yrs u live: ')
// seconds_live= yrs_live*365*24*60*60;
// alert(`you live ${seconds_live} seconds `)


// !Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// !=============Exercises: Level 3===================
// !Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// const curTime=new Date()

// const year= curTime.getFullYear();
// const month=String(curTime.getMonth()+1).padStart(2, '0');
// const datee=String(curTime.getDate()).padStart(2, '0');
// const hours=String(curTime.getHours()).padStart(2, '0');
// const minutes=String(curTime.getMinutes()).padStart(2, '0')

// const format1= `${year}-${month}-${datee} 
// ${hours}:${minutes}`
// const format2=`${datee}-${month}-${year} ${hours}:${minutes}`
// const format3= `${datee}/${month}/${year} ${hours}:${minutes}`

// console.log(format1)
// console.log(format2)
// console.log(format3)