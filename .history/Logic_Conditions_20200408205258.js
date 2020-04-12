var b = 61

if (b % 2 == 0) {
    console.log('Right Think');

} else {
    console.log(b + ' ' + 'Eveen Number this');

};
// trinary Operator
var result = (b % 2) == 0 ? 'Right think' : 'Eveen Number this'
console.log(result);


var jamil = 320
var sumon = 240

if (sumon > jamil) {
    console.log('Love man');

} else {
    console.log('bangladesh is new country');

} => {

}

var b = 60

if (b > 33) {
    console.log('your are normal Result');

} else
if (b > 40) {
    console.log('your Good Result');

} else if (b > 60) {
    console.log('your Better Result');


} else if (b > 80) {
    console.log('your Excellent Result');

} else {
    console.log('you are Fail.....................');

}

// Swith

var date = new Date();

var years = date.getFullYear()

switch (years) {
    case 2015:
        console.log('We are Marriage Day');
        break;
    case 2016:
        console.log('Office New post');
        break;
    case 2017:
        console.log('We are Tur CTG');
        break;
    case 2018:
        console.log('We are go to CoxBazzer');
        break;
    case 2019:
        console.log('We are Addminssion in Codertruest');
        break;
    case 2020:
        console.log('Allah Please Save me for Corona Vries');
        break;

    default:
        console.log('Not A valid Number');

        break;
};


//  month to 0 -11 name na  
//

var date = new Date();
var month = date.getMonth()
switch (month) {
    case 0:
        console.log('We are Spacial Day');
        break;
    case 1:
        console.log('Office New post');
        break;
    case 2:
        console.log('We are Tur CTG');
        break;
    case 3:
        console.log('We are go to Nodejs');
        break;
    case 4:
        console.log('We are Admission in React');
        break;
    case 5:
        console.log('Allah Please Save me for Corona Vries');
        break;
    case 6:
        console.log('We are go to Javascript');
        break;
    case 7:
        console.log('We are Admission in Back End');
        break;
    case 8:
        console.log('Allah Please Save me for Corona Vries');
        break;
    case 9:
        console.log('We are go to ');
        break;
    case 10:
        console.log('We are Admission in Front End ');
        break;
    case 11:
        console.log('We are Admission in Front End ');
        break;
    default:
        console.log('Not A valid Number');
        break;
};

//
var name = new Date();
var day = date.getDay()
switch (day) {
    case 0:
        console.log('Stay Home');
        break;
    case 1:
        console.log('Stay Home Namaj');
        break;
    case 2:
        console.log('Stay Home in Al-Quran');
        break;
    case 3:
        console.log('Stay Home in Payer');
        break;
    case 4:
        console.log('Stay Home in Al-Quran in learn');
        break;
    case 5:
        console.log('Stay Home in Payer in stay home');
        break;
    case 6:
        console.log('Stay Home in Payer in stay home yha');
        break;

    default:
        break;
}

var date = new Date();
var day = date.getDay()
switch (day) {
    case 0:
        console.log('Stay Home');
        break;
    case 1:
        console.log('Stay Home');
        break;
    case 2:
        console.log('Stay Home Namaj');
        break;
    case 3:
        console.log('Stay Home in Al-Quran');
        break;
    case 4:
        console.log('Stay Home in Payer');
        break;
    case 5:
        console.log('Stay Home in Al-Quran in learn');
        break;
    case 6:
        console.log('Stay Home in Payer in stay home');
        break;

    default:
        break;
}
date = new Date();
var day = date.getDay()
switch (day) {
    case 0:
        console.log('Stay Home');
        break;
    case 1:
        console.log('Stay Home Namaj');
        break;
    case 2:
        console.log('Stay Home Namaj');
        break;
    case 3:
        console.log('Stay Home in Al-Quran');
        break;
    case 4:
        console.log('Stay Home in Payer');
        break;
    case 5:
        console.log('Stay Home in Al-Quran in learn');
        break;
    case 6:
        console.log('Stay Home in Payer in stay home');
        break;

    default:
        break;
}
//

var b = 7

if (b > 33 && b <= 39) {
    console.log('your are normal Result');
} else if (b > 40 && b <= 49) {
    console.log('your Better Result');
} else if (b > 50 && b <= 59) {
    console.log('your Better Result');
} else if (b > 60 && b <= 69) {
    console.log('your Better Result');
} else if (b >= 70 && b <= 79) {
    console.log('your Better Result');
} else if (b > 80 && b <= 89) {
    console.log('your Excellent Result');
} else {
    console.log('you are Fail...................')
}


var a = 10
var b = 20
var c = 50
var d = 70

if (a > b && c > d) {
    console.log('A gatter then b and c gater then d');

} else {
    console.log('This ture');

}
if (a > b || c > d) {
    console.log('A gatter then b and c gater then d');

} else {
    console.log('This ture');

}

var n = 2
var str = ''

if (n % 2 == 0) {
    str = 'Even'
} else {
    str = 'Odd'
}
console.log(str);

var result = (n % 2) == 0 ? 'Even' : 'Odd';
console.log(result);


//for lopp//
var sum = 1;
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
        sum += i

    }
}
var sum = 0;
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
        sum += i

    }
}

for (var i = 0; i <= 50; i++) {
    console.log(i + ' Md: Anisur Rahman sumon');

}

// While Loop//

var i = 0;
while (i < 10) {
    console.log(i + ' ' + 'SS Sumon');
    i++
}

var issRunning = true;

while (issRunning) {
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 7) {
        console.log('Winner Winner you go to Dinner');
        issRunning = false
    } else {
        console.log(rand + '  ' + 'Plasee try again');

    }
}

var n = 1

for (var i = 0; i < 50; i++) {
    if (n % 2 == 1) {
        console.log(i);

    }
}


var running = true;

while (running) {
    var rand = Math.round(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('I am Winner Winner .........');
        running = false;

    } else {
        console.log(rand + ' ' + 'You are Try Again');

    }
}

var n = 10;

for (var i = 1; i <= 10; i++) {
    result = ' ';
    for (var j = 1; j <= i; j++) {
        result += ' * ';
    }
    console.log(result);
}

for (let i = 0; i < 10; i++) {
    if (i == 5 || i == 8) {
        continue
    } else {
        console.log(i);

    }
}


var str = 'This is a \'String\''
console.log(str);

var str = 'This is a \nString'
console.log(str);

var str = 'This is a \\String'
console.log(str);


var a = 'I am';
var b = ' Sumon Khan'
var c = a.concat(b);

console.log(c);
console.log(c.toString());
console.log(c.toUpperCase());
console.log(c.toLowerCase());
console.log(c.toLocaleString(c));
console.log(c.split(' '));


var str = ' Where you to going'
console.log(str.length);

var str2 = 'SM Sumon'

var length = 0

while (true) {
    if (str2.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(str2);
console.log(length);



var arr = [1, 2, 3, 4, 5]
arr[5] = 6

arr[12] = 15
console.log(arr.length);
arr[2] = 25
console.log(arr.length);
console.log(arr[13]);

console.log(arr);

let fruits = ['Apple', 'Banana']

fruits.forEach(function(item, index, array) {
    console.log(item, index)
})

let newArr = fruits.push('Orange')

console.log(fruits);

console.log(fruits[1]);

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

for (var i = 0; i < 50; i++) {
    console.log(i);
}

var dc = 10
var nc = '10'

var cc = dc == nc
console.log(cc);






===
=>
-- -- --