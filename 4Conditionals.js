// ! Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// ! Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// ! If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

// ! Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// ! Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

//! Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

//!Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

// let day=prompt('what is the day today?')
// day=day.trim().toLowerCase();
// let formatedDay=day.charAt(0).toUpperCase()+day.slice(1);
// switch (day){
//   case 'Saturday':
//     case 'sunday':
//       console.log(`${formatedDay} is a weekend`);
//       break;
//       case 'Monday':
//         case 'Tuesday' :
//           case 'Wednesday':
//             case "Thursday":
//               case "Friday":
//                 console.log(`${formatedDay} is a working day`)
//                 break;
//                 default:
//                   console.log("Invalid day entered")
// }

// let months=prompt('Enter a month')
// months=months.trim().toLowerCase()
// let formatedMonths=months.charAt(0).toUpperCase()+months.slice(1)
// if(months=='january' || months== 'march' || months=='may' || months=='july' ||months=='august' || months=='october' || months=='december'){
//   console.log(`${months} has 31 days`)
// }else if(months=='february'){
//   console.log(`${months} has 28 days`)
// }else{
//   console.log(`${months} has 30 days`)
// }


//! Write a program which tells the number of days in a month, now consider leap year.


let months = prompt('Enter a month')
months = months.trim().toLowerCase()
let formatedMonths = months.charAt(0).toUpperCase() + months.slice(1) //slice(1) kya kr rha hai
let yr;
if (months === 'february') {
  yr = parseInt(prompt('Enter the year'))
}
if (months == 'january' || months == 'march' || months == 'may' || months == 'july' || months == 'august' || months == 'october' || months == 'december') {
  console.log(`${months} has 31 days`)
} else if (months == 'february') {
  if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
    console.log(`${formatedMonths} has 29 days (leap year)`)
  } else {
    console.log(`${formatedMonths} has 28 days`)
  }
} else if (months === 'april' || months === 'june' || months === 'september' || months === 'november') {
  console.log(`${formatedMonths} has 30 days`)
} else {
  console.log('Invalid month entered')
}