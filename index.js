// REVIEW What is an Array?

// REVIEW What is an Object?

// TODO How would I grab 'cherries' from the following array?

// let fruits = ['apple', 'banana', 'cherries', 'watermelon', 'oranges']
// console.log(fruits[2])
// let test = fruits.indexOf('cherries')
// console.log(fruits[test]);

// TODO Let's create an object of three users: Bob, Sara, and Yvette with their name, hobbies, and favorite color

// const users = [
//   {
//     name: 'Bob',
//     hobbies: ['photography', 'eating', 'sleeping'],
//     favoriteColor: 'blue'
//   },
//   {
//     name: 'Sara',
//     'favorite hobbies': ['gardening', 'reading', 'knitting'],
//     favoriteColor: 'yellow'
//   },
//   {
//     name: 'Yvette',
//     hobbies: ['cooking', 'coding'],
//     favoriteColor: 'green'
//   }
// ]

// TODO console.log Bob's favorite color

// console.log(users[0].favoriteColor)

// TODO console.log Sara's second hobby

// console.log(users[1]['favorite hobbies'][1])

// REVIEW What is a function? And why is it important?

// TODO Create a function that iterates through the following array and multiplies it by 2

// REVIEW for-loops

// let multiplyThis = [1, 3, 5, 7, 9, 3, 1]

// function multiply(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 2
//   }
//   return array
// }

// console.log('Multiply This --> ', multiply(multiplyThis))

// TODO Use a method to split the following String value

let splitThis = 'We’re in this together, from your first day of classes to your first day on the job - and beyond.'

const splitted = splitThis.split(' ')

// TODO console.log the length of the split String

// console.log(splitted.length);

// TODO Challenge: Create a function that finds the smallest and largest number in an array

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 3, 2, 64, 7]

// function minMax(arr) {
//   arr.sort(function (a, b) {
//     return a - b
//   })
//   return arr
// }

// console.log('Largest Number in array --> ', minMax(arr2))

// TODO Challenge: What is the largest number?
// let findLargest = [5, 3, 8, 3, 1, 8, 45]
// function largestNum(num) {
//   return num
// }

// console.log('Find Largest -->', largestNum(findLargest))

// TODO Challenge: Create a function that filters out strings from array
// let str1 = [1, 5, 'hi', 9, true, 'bye', null, undefined]
// console.log(typeof str1[2])
// function filterArray(arr) {
//   let str = []
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       str.push(arr[i])
//     }
//   }
//   return str
// }

// console.log('FilterArray --> ', filterArray(str1))



// console.log('Largest Num -->', largestNum(findLargest))

// TODO Challenge: Sort array by string length

// let sortThis = ["Google", "Apple", "Microsoft", "Turing", "Einstein", "Jung"]
// // let sortThis2 = ["Turing", "Einstein", "Jung"]
// // console.log(sortThis[0].length)
// function sortByLength(arr) {
//   arr.sort()
//   return arr
// }
// console.log('Sort by String length --> ', sortByLength(sortThis))


// TODO Challenge Check if number is in a given range
const range1 = {
  min: 1,
  max: 5
}

function isInRange(num, range) {
  let min = range.min
  let max = range.max

  if (num > min && num < max) {
    return true
  }
  return false
}

// console.log('Is in range --> ', isInRange(3, range1))


//TODO Phone number formatting --> 652-413-7523

// const alicePhone = '6524137523'
// function numberFormat(number) {
//   let num = number.split('')
//   console.log(num)
//   num.splice(0, 0, '(')
//   num.splice(4, 0, '-')
//   num.splice(8, 0, '-')
//   // console.log(num)
//   return num.join('')
// }

// console.log('Number Format --> ', numberFormat(alicePhone))


// TODO 

const reviews = [
  { name: "Daniela", rating: 5, feedback: "Beautiful atmosphere and wonderful vegan options!" },
  { name: "Jack", rating: 3, feedback: "A little too hipster for my taste, but the burger was decent, if overpriced" },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  { name: "Wen", rating: 4.5, feedback: "I don't leave my house often, but when I do, it's for this place. Highly reccomend." },
  { name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day." },
  { name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
  { name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay." },
  { name: "Reyna", rating: 3.5, feedback: "" },
]


function getLongReviews(arr) {
  let names = []
  // iterate, or loop through every item in my array
  for (let place = 0; place < arr.length; place++) {
    // find the feedback 
    // count the words in my feedback
    if (arr[place].feedback.split(' ').length > 15) {
      names.push(arr[place].name)

    }
    // return the user's name whose feedback is at least 15 words
  }
  return names

}

console.log(getLongReviews(reviews))


