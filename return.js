function greet(meg) {
    function getting(name) {
        return meg + ', ' + name + '!';

    }
    return getting
}

var gd = greet('Good Morning')
var result = gd('Md Sumon')

console.log(result);


function base(b) {
    function power(n) {
        return n * n
    }
    return power
}

var result = base()
console.log(result(12));











function base(b) {
    return function(n) {
        var res1 = 1
        for (var i = 0; i < b; i++) {
            res1 *= n
        }
        return res1
    }

}

var base5 = base(5)

console.log(base5(6));