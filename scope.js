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