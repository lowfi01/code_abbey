
function doThis() {
    var result = document.querySelector("#input").value;
    alert(result);
    return false;
}

function init() {
    var submit = document.querySelector("#regForm")
    submit.onsubmit = doThis;
}

window.onload = init;

