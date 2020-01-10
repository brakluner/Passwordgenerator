var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()";

var submit   = document.getElementById("submit");
var charNum  = document.getElementById("charNum");
var urpsswrd = document.getElementById("urpsswrd");

submit.addEventListener("click",function(e) {
    urpsswrd.value = password(charNum.value, char);
});

function password(l,char) {
    var psswrd = '';

    for (var i = 0; i<l; i++) {
        psswrd += char.charAt(Math.floor(Math.random() * char.length));
    }
    return psswrd;
}