const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_6.jpg"
];

const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');
const picture = document.getElementById('picture');

let index = 0;

buttonNext.onclick = function() {
    index++;
    if (index === images.length) {
        index = 0;
    }
    picture.src = images[index];
    
}

buttonPrev.onclick = function() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    picture.src = images[index];

}