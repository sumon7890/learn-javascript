var arr = [1, 5, 9, 4, 6, 77, 22, 5, 44, 11, 99, 33]

function addNewArr(arr, cb) {
    var nevada = []
    for (var i = 0; i < arr.length; i++) {

        if (cb(arr[i], i, arr)) {
            nevada.push(arr[i])
        }
    }


    return nevada;
}

console.log(addNewArr(arr, function(value) {
    value % 2 === 1
}));
console.log(addNewArr(arr, function(value) {
    value > 4
}));


var str4 = [1, 5, 9, 4, 6, 77, 22, 5, 44, 11, 99, 33, 333, 999, 444]
var arr11 = str4.filter(function(value) {
    return value > 100
})

console.log(arr11);