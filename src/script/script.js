import { App } from "./components/app/app"
import data from "../data/data";
import Sorts from "./components/filters/filters";

import "../style/style.scss";

import noUiSlider from "./nouislider.min.js"

import logo from "../my-logo.svg"
import logoRSS from "../rs_school_js.svg"

import img1 from "../img/sneakers1.jpg"
import img2 from "../img/sneakers2.jpg"
import img3 from "../img/sneakers3.jpg"
import img4 from "../img/sneakers4.jpg"
import img5 from "../img/sneakers5.jpg"
import img6 from "../img/sneakers6.jpg"
import img7 from "../img/sneakers7.jpg"
import img8 from "../img/sneakers8.jpg"
import img9 from "../img/sneakers9.jpg"
import img10 from "../img/sneakers10.jpg"
import img11 from "../img/sneakers11.jpg"
import img12 from "../img/sneakers12.jpg"
import img13 from "../img/sneakers13.jpg"
import img14 from "../img/sneakers14.jpg"
import img15 from "../img/sneakers15.jpg"
import img16 from "../img/sneakers16.jpg"
import img17 from "../img/sneakers17.jpg"
import img18 from "../img/sneakers18.jpg"
import img19 from "../img/sneakers19.jpg"
import img20 from "../img/sneakers20.jpg"
import img21 from "../img/sneakers21.jpg"
import img22 from "../img/sneakers22.jpg"
import img23 from "../img/sneakers23.jpg"
import img24 from "../img/sneakers24.jpg"
import img25 from "../img/sneakers25.jpg"
import img26 from "../img/sneakers26.jpg"
import img27 from "../img/sneakers27.jpg"
import img28 from "../img/sneakers28.jpg"
import img29 from "../img/sneakers29.jpg"
import img30 from "../img/sneakers30.jpg"


// start
const app = new App(data);
app.launch();

const sortsResetBbutton = document.querySelector('.sorts__reset__button'),
    searchInput = document.querySelector('.catalog__menu__search-input'),
    searchButton = document.querySelector('.catalog__menu__search-button'),
    searchReset = document.querySelector('.catalog__menu__search-reset'),
    popularCheckbox = document.querySelector('.sorts__popular__checkbox');

sortsResetBbutton.addEventListener('click', () => {
    const app = new App(data);
    app.launch();
});

searchButton.addEventListener('click', () => {
    const sorts = new Sorts(data)
    sorts.sort()
});

searchInput.addEventListener('keydown', (e) => {
    if (e.code == "Enter" || e.key == "Enter" || e.keyCode == 13) {
        const sorts = new Sorts(data)
        sorts.sort()
    }
    
})

searchReset.addEventListener('click', () => {
    searchInput.value = '';
    const sorts = new Sorts(data)
    sorts.sort()
});

popularCheckbox.addEventListener('click', () => {
    const sorts = new Sorts(data)
    sorts.sort()
});

document.querySelector('#sort').addEventListener('change', () => {
    const sorts = new Sorts(data)
    sorts.sort()
})