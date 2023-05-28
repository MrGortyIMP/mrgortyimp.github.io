

function encode() {

    var input = document.getElementById("input").value;

    var key = document.getElementById("key").value;

    var output = "";

    for (var i = 0; i < input.length; i++) {

        var charCode = input.charCodeAt(i) + key.charCodeAt(i % key.length);

        output += String.fromCharCode(charCode);

    }

    document.getElementById("output").value = output;

}

function decode() {

    var input = document.getElementById("input").value;

    var key = document.getElementById("key").value;

    var output = "";

    for (var i = 0; i < input.length; i++) {

        var charCode = input.charCodeAt(i) - key.charCodeAt(i % key.length);

        output += String.fromCharCode(charCode);

    }

    document.getElementById("output").value = output;

}
