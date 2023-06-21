// console.log("lighton" == "lightoff");

// let nums = [1,2,3];
// let numbers = [1,2,3];

// console.log(nums == numbers);  // we do not compare non - primitive datatypes. Because like primitive ones they dont compare value they compare reference.

// let userOne = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }
    
//     let userTwo = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }
    
// console.log(userOne == userTwo)




// let randomNum = Math.random()         // generates 0 to 0.999
// let numBtnZeroAndTen = randomNum * 11

// console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// console.log(randomNumRoundToFloor)    // this gives between 0 and 10
 

// TEMPLATE LITERALS

// `String literal text`
// `String literal text ${expression}`



// let a = 4;
// let b = 8;
// console.log(`${a}` + " is greater than " + `${b}` + ": " + `${a>b}`)

// let firstName = 'pratish'
// console.log(firstName.split())
// console.log(firstName.split(' '))

// let firstName = 'pratish'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split('')) 



// let firstName = 'Pratish'

// console.log(firstName.concat(" is very lovely boy" , " he dont understand this", "but i do "))

// console.log(firstName.startsWith(''))

// console.log(firstName.search('t'))

// console.log(firstName.repeat(20))


// let num = '9'
// console.log(num)
// console.log(typeof num)
// let actualNum = parseInt(num);
// console.log(actualNum);
// console.log(typeof actualNum);




// Exercise - 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

// // const count = (sentence.match(/\blove\b/gi) || []).length;
// console.log(count);


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'


// let phrase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// let count =  (phrase.match(/\d+/))
// console.log(phrase.match(count))
// console.log(count)



const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g);
let totalIncome = 0;

if (numbers) {
  numbers.forEach((number) => {
    totalIncome += parseInt(number);
  });
}

const annualIncome = totalIncome * 12;
console.log(annualIncome);
