/* 
* Sets the width of the top and bottom text to the width of the image. This is simply so the text doesn't overflow
* outside of the image if you enter more than one line of text.
*
* Note that we have to wait for window.onload because, when this script is called in the HTML, the image won't have
* loaded yet.
*/
window.onload = function() {
    // This can't be document.querySelector('img').style.width because that gets the width we set, not the display width
    // It would therefore be 0, since we don't set the width in the CSS.
    // Also, note the difference from C++. Here we just use "let" to declare all variables, instead of specifying a type.
    let width = document.querySelector('img').getBoundingClientRect().width + "px";

    document.getElementById("top-text").style.width = width;
    document.getElementById("bottom-text").style.width = width;
}

/*
* Copies the text from the text boxes to the top and bottom text on the meme.
*/
function displayResult() {
    // innerHTML is the stuff that appears inside the <div></div> tags.
    // For example, if the HTML reads <div>asdf</div> then "asdf" is the innerHTML.
    document.getElementById("top-text").innerHTML = document.getElementById('textbox1').value;
    document.getElementById("bottom-text").innerHTML = document.getElementById('textbox2').value;
}