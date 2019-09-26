const fs = require('fs')
const util = require('util')

class Animal {
    constructor(name, breed, weight, birthYears) {
        this.name = name
        this.breed = breed
        this.weight = weight
        this.birthYears = birthYears
    }
}

// const fileData = fs.readFileSync('data.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   return data
// })

// console.log(fileData)

const fileData = fs.readFileSync('data.txt').toString().split("\n")

for (i in fileData) {
    // console.log(fileData[i])
}

let breedArr = []
let splitArr = []

for (let i = 0; i < fileData.length; i++) {

    if (i === 0 || i === 3) {
        breedArr.push(fileData[i])
    }

    else if (i === 1 || i === 2 || i === 4) {
        splitArr.push(fileData[i].split(','))
    }
}

// console.log(breedArr)
// console.log(splitArr)

let newBreedArr = []

for (let i = 0; i < breedArr.length; i++) {

    newBreedArr.push(breedArr[i].substring(0, breedArr[i].length-2))
}

for (let i = 0; i < splitArr.length; i++) {

    for (let j = 0; j < splitArr.length; j++) {

        if (i === 0 && j === 2) {
            splitArr[0][2] = splitArr[i][j].substring(0, splitArr[i][j].length-1)
        }

        else if (i === 1 && j === 2) {
            splitArr[1][2] = splitArr[i][j].substring(0, splitArr[i][j].length-1)
        }
    }
}

// console.log(newBreedArr)

maglis = new Animal(splitArr[0][0], newBreedArr[0], splitArr[0][2], splitArr[0][1])
bella = new Animal(splitArr[1][0], newBreedArr[0], splitArr[1][2], splitArr[1][1])
ganges = new Animal(splitArr[2][0], newBreedArr[1], splitArr[2][2], splitArr[2][1])

console.log(maglis)
console.log(bella)
console.log(ganges)

// console.log(maglis.weight)
// console.log(bella.weight)
// console.log(ganges.weight)

let animalWeights = []
animalWeights.push(maglis.weight)
animalWeights.push(bella.weight)
animalWeights.push(ganges.weight)

// console.log(animalWeights)

// sort = arrayForSort => {
//     for (let i = 0; i < arrayForSort.length; i++) {
//       let currentValue = arrayForSort[i]
//       let j
  
//       for (j = i - 1; j >= 0 && arrayForSort[j] > currentValue; j--) {
//         arrayForSort[j + 1] = arrayForSort[j]
//       }

//       arrayForSort[j + 1] = currentValue
//     }

//     return arrayForSort
// }

// sort(animalWeights)

// console.log(animalWeights)

const animalWeightSort = (a, b) => {
    return a - b
}

let temp = animalWeights.sort(animalWeightSort)
console.log(temp.reverse())

let maglisNewBreed

for (let i = 0; i < maglis.breed.length; i += 2) {
    maglisNewBreed += maglis.breed[i]
}

const getEverySecondLetter = str => {
    let result

    for (let i = 0; i < str.length; i += 2) {
        result += str[i]
    }

    return result
}
 
const calculatePrecision = num => {
    return Number.parseFloat(num).toFixed(2)
}

console.log(maglis.name.toUpperCase(), getEverySecondLetter(maglis.breed).substr(9, getEverySecondLetter(maglis.breed).length - 1), 2019 - maglis.birthYears, calculatePrecision(maglis.weight))
console.log(bella.name.toUpperCase(), getEverySecondLetter(bella.breed).substr(9, getEverySecondLetter(bella.breed).length - 1), 2019 - bella.birthYears, calculatePrecision(bella.weight))
console.log(ganges.name.toUpperCase(), getEverySecondLetter(ganges.breed).substr(9, getEverySecondLetter(ganges.breed).length - 1), 2019 - ganges.birthYears, calculatePrecision(ganges.weight))

fs.writeFile('results.txt', util.inspect(maglis), err => {
    if (err) throw err
})

fs.appendFile('results.txt', util.inspect(bella), err => {
    if(err) throw err
})

fs.appendFile('results.txt', util.inspect(ganges), err => {
    if(err) throw err
})