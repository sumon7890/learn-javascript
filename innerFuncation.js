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