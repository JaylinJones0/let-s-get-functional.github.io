// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  let males = _.filter(array, function(customer){return customer.gender === 'male'})
  return males.length
};

var femaleCount = function(array) {
  let females = _.reduce(array, function(accumulator, current) {
    if(current.gender === 'female') {
      accumulator++;
    }
    return accumulator
  }
  , 0)
  return females;
}
var oldestCustomer = function(array) {
  let seniorCitizen = _.reduce(array, function(older, current){
    if (current.age > older.age) {
      return current
    }
    return older
  }, array[0])
  return seniorCitizen.name
}

var youngestCustomer = function(array) {
  let tinyBaby = _.reduce(array, function(baby, current) {
    if (current.age < baby.age) {
      return current
    }
    return baby
  }, array[0])
  return tinyBaby.name
}

var averageBalance = function(array) {
  let totalBalance = _.reduce(array, function(total, current) {
    let cleanBalance = Number(current.balance.replace(/[,$]/g, ''))
return total + cleanBalance
  }, 0)
 return totalBalance / array.length
}

var firstLetterCount = function(array, letter) {
let letterCount = _.filter(array, function(customer){
return customer.name[0].toLowerCase() === letter.toLowerCase()
})
return letterCount.length
}

var friendFirstLetterCount = function(array, customer, letter) {
let custArr = _.filter(array, function(currentCust){
 return currentCust.name === customer
})
let custObj = custArr[0]
let letterCount = _.filter(custObj.friends, function(currentFriend){
  return currentFriend.name[0].toLowerCase() === letter.toLowerCase()
  })
  return letterCount.length
}

var friendsCount = function(array, name) {
  /* declare custName variable and assign it to my reduce method which will 
  take in the customers array, iterate through it, and return an array of customer names
  that pass the condition of the some method.

  In plain english my function is using reduce to go through the array of customers and if at least one of the customer's friends names matches the input name
  put the current customer's name into a new array, after going through all the customers, return that new array. Once that new array is returned it is assigned to my custNames
  variable and I am able to return custNames at the end.
  */
let custNames = _.reduce(array, function(acc, customer){
if (_.some(customer.friends, function(friend) {
 return friend.name === name
})) {
acc.push(customer.name)
}
return acc
}, [])
return custNames
}

var topThreeTags = function(array) {
// frequency object using reduce
let frequency = _.reduce(array, function(acc, current){
for (let i = 0; i < current.tags.length; i++) {
  if (acc.hasOwnProperty(current.tags[i])) {
acc[current.tags[i]]++;
  } else {
acc[current.tags[i]] = 1;
  }
}
return acc;
}, {})
// create array of subarrays. each subarray should be the tag and number of times it appears
let frequencyArray = Object.entries(frequency);
frequencyArray.sort(function(a,b){
  return b[1] - a[1];
})
let flatFrequency = frequencyArray.flat(Infinity)
let strArray = flatFrequency.filter(element => typeof element === 'string')
let finalArray = strArray.slice(0, 3)
return finalArray
}

var genderCount = function(array) {
  let returnObj = {
    female: _.reduce(array, function(accumulator, current) {
      if(current.gender === 'female') {
        accumulator++;
      }
      return accumulator
    }
    , 0),
    male: _.reduce(array, function(accumulator, current) {
      if(current.gender === 'male') {
        accumulator++;
      }
      return accumulator
    }
    , 0),
    'non-binary': _.reduce(array, function(accumulator, current) {
      if(current.gender === 'non-binary') {
        accumulator++;
      }
      return accumulator
    }
    , 0)
  }
  return returnObj
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
