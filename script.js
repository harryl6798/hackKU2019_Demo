document.onload = function() {
    document.querySelector("img").onload = function() {
        let width = document.querySelector('img').getBoundingClientRect().width + "px";
    
        document.getElementById("center-bottom").style.width = width;
        document.getElementById("center-bottom").style.width = width;
    }
}

function displayResult() {
    document.getElementById("center-top").innerHTML = document.getElementById('textbox1').value;
    document.getElementById("center-bottom").innerHTML = document.getElementById('textbox2').value;
}