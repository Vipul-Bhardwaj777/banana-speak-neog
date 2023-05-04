var input = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"; 

btnTranslate.addEventListener("click", clickHandler);

function clickHandler(){
    var txtInput = input.value;
    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated

    })
    .catch(errorHandler)

}

function getTranslationURL(txt){
    return serverURL+"?"+"text="+txt
}

function errorHandler(error){
    console.log("An error occured" + error);
    alert("Something wrong with server: Please try after sometime");
}