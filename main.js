const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');




/* Looping through images */
var imgList = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]


for (var i = 0; i < imgList.length; i++) {
    const newImage = document.createElement('img');             //creates img tag in memory
    newImage.setAttribute('src', "images/" + imgList[i]);

    //add on click handler to new img
    newImage.addEventListener("click", imgClicker);
    thumbBar.appendChild(newImage);

}

function imgClicker(e) {
    displayedImage.setAttribute("src", e.target.getAttribute('src'))

}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', imgShade);

function imgShade(e) {
    if (e.target.getAttribute("class") == "dark") {
        //if dark then light
        e.target.setAttribute('class', 'light')
        btn.textContent = 'lighten'
        overlay.style.backgroundColor = ("rgba(0,0,0,0.5)");
    } else {
        e.target.setAttribute('class', 'dark')
        btn.textContent = 'darken'
        overlay.style.backgroundColor = ("rgba(0,0,0,0.0)");
    }


}








