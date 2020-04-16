var arr = [1, 2, 3, 4, 5, 6]
sum = 0;

forEach(arr, function(value, index, arr) {
    arr[index] = value + 5;
    sum += value
})

console.log(sum);

console.log(arr);

sum = 0
arr.forEach(arr, function(value, i, arr) {
    sum += value
})

console.log(arr);

array.forEach(element => {

});