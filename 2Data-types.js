// !Decalare a variable named challenge and assign it to an initial value '30 Days of JavaScript'.

let challenge='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2)) //starting index and number of character to slice
console.log(challenge.substring(3,21)) //starting index and stopping index but doesn't include the character at the stopping index.
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(" "))

let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(", "))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('J')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence="You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let trimming="     30 Days Of JavaScript      "
console.log(trimming.trim())


console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/g)) //here /a/g is a regular expression to match all lowercase a letter globally (g flag)

let concat1='30 Days Of',
concat2=' JavaScript';
console.log(concat1.concat(concat2))

console.log(challenge.repeat( 2))

//!=============Exercise:Level 2===============
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you love, so dont\'t just give money but reach out your hand instead.')

console.log(typeof('10')===10)//false
console.log(parseInt('10')===10)//true

console.log(parseFloat('9.8')===10)//false
console.log(Math.ceil('9.8')===10) //true
console.log(Math.round('9.8')===10) //true
console.log(Math.round(parseFloat('9.8'))===10) //true

let word1='python',
word2='jargon'
console.log(word1.includes('on')&& word2.includes('on')) //here substring 'on exists in both words,

let sentence1='I hope this course is not full of jargon'
console.log(sentence1.includes('jargon'))

// let nums=Math.floor(Math.round()*101)
// console.log(nums)
console.log(Math.floor(Math.random()*101))

console.log(Math.floor(Math.random()*51)+50)//here math.random()*51 gives a range from 0 to 50 and adding 50 shifts the range to 50-100

console.log(Math.floor(Math.random()*256))

let wordss='JavaScript'
let randomIndex=Math.floor(Math.random()*wordss.length)
let randomChar=wordss[randomIndex];
console.log(randomIndex)
console.log(randomChar)

// console.log(Math.floor(Math.random()*'JavaScript'.length))

console.log('1\t1\t1\t1\t1\n'+'2\t1\t2\t4\t8\n'+'3\t1\t3\t9\t27\n'+'4\t1\t4\t16\t64\n'+'5\t1\t5\t25\t125\n')

console.log(sentence.substr(31,24))

//!=======Excercise:Level 3==========

let sentCount='Love is the best thing in the world. Some found their love and some are still looking for their love.'
console.log(sentCount.match(/love/gi).length);

console.log(sentence.match(/because/g).length)

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentences.replace(/[^a-zA-Z0-9\s]/g, ''))

let extracts='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// console.log(extracts.match(/\d+/g)); //extracts all the numbers

// now adding all the extacting numbers
let numbers=extracts.match(/\d+/g).map(Number);
console.log(numbers)
let income=(numbers[0]*12)+numbers[1]+(numbers[2]*12)
console.log(income)