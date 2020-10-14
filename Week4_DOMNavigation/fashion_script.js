
// * Create an `script.js`

// * Using the provided `index.html`, complete the following
document.getElementById("main").children[0].textContent="NO LONGER NEWS";
document.getElementById("main").children[1].textContent= "NOT DAILY NEWS UPDATE ONLY CATS!!!! ONLY. CATS. ";
document.getElementById("main").style.fontSize = "50px"; 
// AHA IT WORKED SUCKERS
document.getElementById("main").style.fontColor = "green"; 

var artDiv = document.getElementById('articles');
var mainDiv = document.getElementById('main');
artDiv.children[0].lastElementChild.style.color = 'blue';
artDiv.children[0].style.fontSize = '50px';
artDiv.previousElementSibling.style.background = 'black';
mainDiv.childNodes[1].style.textDecoration = 'underline';
mainDiv.lastElementChild.style.fontSize = '50px';
mainDiv.firstElementChild.style.color = 'orange';
mainDiv.lastElementChild.parentElement.style.fontSize = '40px';






//   * Target the div with the ID of `articles`.

//     * Change its font size to `50px`.

//     * Change its first childs, last child to have a font color of `blue`.

//     * Change its previous sibling to have a background color of `black`.

//   * Target the div with the ID of `main`.

//     * Change its second child node so the text is `underlined`.

//     * Change its last child element to have a font size of `50px`.

//     * Change its first child element to have a font color of `orange`.
    
//     * Change its last child elements parent to have a font size of `40px`.