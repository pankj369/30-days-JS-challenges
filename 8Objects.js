// let dog = {} //creating an empty object
// console.log(dog) //print the dog object
// dog.name='Tommy'//add name, leg, color, age and bark properties
// dog.leg=4
// dog.color='black'
// dog.age=1
// dog.bark=function(){
//     return 'Woof woof!'
// }

const { use } = require("react");

// // getting name, legs, color, age and bark value
// console.log(dog.name) //print the name of the dog
// console.log(dog.leg) //print the number of legs of the dog
// console.log(dog.color) //print the color of the dog
// console.log(dog.age) //print the age of the dog
// console.log(dog.bark())

// dog.breed='Labrador' //set new properties:-breed and getDogInfo
// dog.getDogInfo=function(){  
//   return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Legs: ${this.leg}, Bark: ${this.bark()}`;
// }
// console.log(dog.getDogInfo())

//!===========Level 2=====================

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// let mostSkilled='';
// let maxSkillCount=0;

// for(let user in users){
//   const skillCount=users[user].skills.length;
//   if(skillCount>maxSkillCount){
//     maxSkillCount=skillCount;
//     mostSkilled=user;
//   }
// }

// console.log(`The most skilled person is ${mostSkilled} with ${maxSkillCount} skills.`);

// let loggedInCount=0;
// let highPointsCount=0;

// for(let user in users){
//   if(users[user].isLoggedIn){
//     loggedInCount++;
//   }
//   if(users[user].points>=50){
//     highPointsCount++
//   }
// }
// console.log(`Logged in users: ${loggedInCount}`);
// console.log(`Users with >= 50 points: ${highPointsCount}`);

// function findMERNDevelopers(users){
//   const mernDevelopers= [];
//   for(let user in users){
//     const skills=users[user].skills;

//     if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React')&&skills.includes('Node')
//     ){
//   mernDevelopers.push(user);
// }
//   }
//   return mernDevelopers;
// }
// const mernDevs=findMERNDevelopers(users);
// console.log(mernDevs)

// const newUser = {
//   Pankaj: {
//     email: 'pankaj@example.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 23,
//     isLoggedIn: true,
//     points: 60
//   }
// };

// const updatedUsers = { ...users, ...newUser };

// console.log(updatedUsers);


// const userKeys=Object.keys(users);
// console.log(userKeys)


// const userValues=Object.values(users);
// console.log(userValues);


const countries = {
  India: {
    capital: 'New Delhi',
    population: '1.3 billion',
    languages: ['Hindi', 'English']
  },
  USA: {
    capital: 'Washington, D.C.',
    population: '331 million',
    languages: ['English']
  },
  Japan: {
    capital: 'Tokyo',
    population: '126 million',
    languages: ['Japanese']
  }
};

// for (let country in countries) {
//   console.log(`Country: ${country}`);
//   console.log(`Capital: ${countries[country].capital}`);
//   console.log(`Population: ${countries[country].population}`);
//   console.log(`Languages: ${countries[country].languages.join(', ')}`);
//   console.log('-----------------------------');

// }

//!Level 3


// const personAccount={
//   firstName:'Pankaj',
//   lastName:'Kumar',
//   incomes:{salaray: 50000, freelancing:20000},
//   expenses:{rent:15000, groceries:7000},

//   totalIncome:function(){
//     let total=0;
//     for(let key in this.incomes){
//       total+=this.incomes[key];
//     }
//     return total;
//   },
//   totalExpenses:function(){
//     let total=0;
//     for(let key in this.expenses){
//       total+= this.expenses[key]
//     }
//     return total;
// },
// accountInfo:function(){
//   return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpenses()}`;
// },
// addExpense:function(description, amount){
//   this.expenses[description]=amount;
// },
// accountBalance:function (){
//   return this.totalIncome()-this.totalExpenses()
// }
// };
// console.log(personAccount.accountInfo());

// console.log('Account Balance:', personAccount.accountBalance());



    const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// function signUp(newUser){
//   for(let user of users1){
//     if (user.username === newUser.username || user.email === newUser.email) {
//       console.log('User already has an account');
//       return;
//     }
//   }
//   users1.push(newUser)  
//   console.log('User registered successfully')
// }

const newUser = {
  _id: 'xyz123',
  username: 'Pankaj',
  email: 'pankaj@demo.com',
  password: 'abc123',
  createdAt: '17/05/2025 10:00 AM',
  isLoggedIn: false
};


// signUp(newUser);
// signUp(newUser);  

function signIn(username, password) {
  for (let user of users1) {
    if (user.username === username && user.password === password) {
      user.isLoggedIn = true;
      console.log('Login successful!');
      return;
    }
  }
  console.log('Invalid username or password.');
}

signIn('Pankaj', 'abc123');  
signIn('Alex', 'wrongpass'); 


function rateProduct(productId, userId, rate) {
  for (let product of products) {
    if (product._id === productId) {
      const alreadyRated = product.ratings.some(rating => rating.userId === userId);
      if (alreadyRated) {
        console.log('You have already rated this product.');
        return;
      }
      product.ratings.push({ userId, rate });
      console.log('Thanks for rating!');
      return;
    }
  }
  console.log('Product not found.');
}


rateProduct('eedfcf', 'ab12ex', 4.8); 
rateProduct('eedfcf', 'fg12cy', 5);   
