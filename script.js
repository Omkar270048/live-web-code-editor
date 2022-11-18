
// nav-items
var btnCss = document.querySelector("#btnCss");
var btnHtml = document.querySelector("#btnHtml");
var btnJs = document.querySelector("#btnJs");

// textarea and output
var result = document.getElementById("result").contentWindow.document;
var htmlEditor = document.querySelector("#html");
var cssEditor = document.querySelector("#css");
var jsEditor = document.querySelector("#js");

function compile() {
document.querySelector("#btnRun").addEventListener("click", output);

function output() {
    // result.innerHTML = editor.value;
    result.open();
    result.writeln(htmlEditor.value +
    "<style>" + cssEditor.value + "</style>" +
    "<script>" + jsEditor.value + "<\/script>");
    result.close();
}

document.querySelector("#btnDownload").addEventListener("click", function(){
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        ${cssEditor.value}
        </style>
    </head>
    <body>
        ${htmlEditor.value}
        <script>
        ${jsEditor.value}
        </script>
    </body>
    </html>`;
    var filename = "download.html";
    download(filename, html);
}, false);
}


function getCssEitor(){
cssEditor.style.display = "block";
htmlEditor.style.display = "none";
jsEditor.style.display = "none"; 

btnCss.classList.add("underline-shadow");
btnHtml.classList.remove("underline-shadow");
btnJs.classList.remove("underline-shadow");
}

function getHtmlEitor(){
htmlEditor.style.display = "block";
cssEditor.style.display = "none";
jsEditor.style.display = "none"; 

btnHtml.classList.add("underline-shadow");
btnCss.classList.remove("underline-shadow");
btnJs.classList.remove("underline-shadow");
}

function getJsEitor(){
cssEditor.style.display = "none";
htmlEditor.style.display = "none";
jsEditor.style.display = "block"; 

btnJs.classList.add("underline-shadow");
btnHtml.classList.remove("underline-shadow");
btnCss.classList.remove("underline-shadow");
}

function download(file, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html; charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', file);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// main
compile();
