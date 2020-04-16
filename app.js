function addFunction() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input12 = parseInt(input1) + parseInt(input2)


    var total = parseInt(input12 * 2)
    console.log(total);

    document.getElementById('inputZip').value = total;
}


function sumOne() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    var result = total;
    console.log(result);
    document.getElementById('seller').value = result;

}

function totalSum() {
    var price1 = document.getElementById('price1').value;
    var price2 = document.getElementById('price2').value;
    var price3 = document.getElementById('price3').value;
    var price4 = document.getElementById('price4').value;

    var sum = parseInt(price1) + parseInt(price2) + parseInt(price4) + parseInt(price3)
    var addResult = sum;
    console.log(addResult);
    document.getElementById('sum').value = addResult;

}