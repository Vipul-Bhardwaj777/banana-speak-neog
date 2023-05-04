var input = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; 

btnTranslate.addEventListener("click", clickHandler);

function clickHandler(){
    var txtInput = input.value;
    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))

}

function getTranslationURL(txt){
    return serverURL+"?"+"text="+txt
}