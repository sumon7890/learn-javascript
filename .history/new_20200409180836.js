var a = 10
console.log(a);
var arr = [4, 5, 10, 22, 10, 19, 21]


for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);

    }

}


var arr = [10, 12, 55, 18, 20, 26, 39]
var find = 40

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('Data Fournd');
        break
    } else {
        console.log('Data no Found');

    }
}