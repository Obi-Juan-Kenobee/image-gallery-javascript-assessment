const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const imgList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const imgAlt = ['Horseshoe Bend topdown view', 'A Waterfall near the Colorado River', 'Cacti in the Arizona desert', 'The bend in northern Arizona', 'A beutiful waterfall at an undisclosed location in Arizona'];
/* Looping through images */
for (let i = 0; i < imgList.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imgList[i]}`);
    newImage.setAttribute('alt', imgAlt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.classList.remove('dark');
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';

    } else {
        btn.classList.remove('light');
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});