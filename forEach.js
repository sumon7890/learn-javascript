const arr2 = require('arr2');
// var sum = 0
// var arr = [1, 2, 3, 4, 5, 6]
// arr.forEach(testNew)

// function testNew(value, index, arr) {
//     sum -= value
// }
// console.log(sum);

// var numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(value, index, arr) {
//     arr[index] = value * 10;
// }
// console.log(numbers);



// var arr = [1, 4, 3, 5]

// function myMap(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var newArr = []
//         var temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }
//     return newArr;
// }

// var result = myMap(arr)
// console.log(result);

var arr = [1, 7, 3]

function myMap(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i] * arr[i]
        newArr.push(temp)
    }
    return newArr
}

var result = myMap(arr)
console.log(result);