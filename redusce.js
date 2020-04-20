var arr = [-10, -15, 1, 5, 9, 4, 6, 77, 22, 5, 44, 11, 99, 33]

var addReduce = arr.reduce(function(prev, cunt) {
    return prev + cunt
});

console.log(addReduce);

arr.sort()
console.log(arr);

arr.sort(function(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr);






var parsons = [{ name: 'A', age: 35 }, { name: 'D', age: 55 }, { name: 'B', age: 15 }, { name: 'C', age: 10 }, ]

parsons.sort(function(a, b) {
    if (a.name > b.name && a.age > b.age) {
        return 1
    } else if (a.name < b.name && a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(parsons);