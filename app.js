var input = document.querySelector("#txt-input");
var btntranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = input.value;

}

btntranslate.addEventListener("click", clickHandler);