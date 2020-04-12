function printMe() {
    var a = 10
    var b = 20
    console.log(a + b);

}
printMe()

var sum = (a, b) => a + b;
console.log(sum(10, 22));

function add(a, b) {
    return a + b;
}

console.log(add(11, 40));

function addOf(a, b) {
    var total = a * b
    console.log(total);

}
addOf(10, 40)

var arr1 = [100, 4, 11, 10, 9]
var arr2 = [1, 4, 11, 10, 9, 200]
var arr3 = [10, 44, 11, 10, 9]
var arr4 = [9, 49, 11, 10, 9]
var arr5 = [12, 40, 11, 10, 9]

// var sum=0
// for( var i =0;i<arr1.length; i++){
// sum+=arr1[i]
// }
// console.log(sum);



function arrTotalOff(egg) {
    var sum = 0
    for (var i = 0; i < egg.length; i++) {
        sum += egg[i]
    }
    console.log(sum);
}
arrTotalOff(arr1);
arrTotalOff(arr2);
arrTotalOff(arr3);
arrTotalOff(arr4);
arrTotalOff(arr5);

function test(a, b, c) {
    console.log(arguments);

}
console.log(test);
test(10, 22, 45)
    // for(var i=0; i<arguments.length; i++){
    //     function test(a, b, c) {
    //         console.log(arguments);

//     }
//  }

/////////////////////////////////
function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;

}
var result = addAll(10, 24, 26, 39);

console.log(result);

//innner Funcation
function something(greet, name) {
    function getting() {
        console.log(greet, name);

    }
    getting()
}
something('Hello ', 'Sumon how are you')

function someOne(some, name) {
    function greeteing() {
        if (name) {
            return name.split(' ')[0]

        } else {
            return (' ');

        }


    }

    var massase = some + ' ' + greeteing()
    console.log(massase);

}

someOne('hello')

/// scope

function teet(n) {
    function a() {
        return n % 5 == 0
    }

    function b() {
        return n % 3 == 0
    }

    if (a() && b()) {
        console.log('This is True');
    } else {
        console.log('Otherwise not ture');

    }
}
teet(15)


//child access alowes present accebale ,,,but present not accessable chind