
var a = 10;
let b = 20;
const c = 30;

function showOutput() {

    let result = "";

    result += "Global Scope: " + a + "<br>";

    if (true) {
        let x = 50;
        var y = 60;

        result += "Block Scope: " + x + "<br>";
        result += "Var Scope: " + y + "<br>";
    }

    result += "Hoisting Example: " + hoist + "<br>";

    document.getElementById("result").innerHTML = result;
}

var hoist = 100;
