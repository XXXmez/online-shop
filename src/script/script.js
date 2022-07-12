
import "../style/style.scss";

import noUiSlider from "./nouislider.min.js"

import img0 from "../img/sneakers1.jpg"
import img1 from "../img/sneakers2.jpg"
import img2 from "../img/sneakers3.jpg"
import img3 from "../img/sneakers4.jpg"
import img4 from "../img/sneakers5.jpg"
import img5 from "../img/sneakers6.jpg"
import img6 from "../img/sneakers7.jpg"


const amountSlider = document.querySelector('.sorts__amount__slider'),
    sortsAmountMim = document.querySelector('.sorts__amount__mim'),
    sortsAmountMax = document.querySelector('.sorts__amount__max'),
    amounMinMax = [sortsAmountMim, sortsAmountMax];

const releaseSlider = document.querySelector('.sorts__release__slider'),
    sortsReleaseMim = document.querySelector('.sorts__release__mim'),
    sortsReleaseMax = document.querySelector('.sorts__release__max'),
    releaseMinMax = [sortsReleaseMim, sortsReleaseMax];

if (amountSlider) {
    noUiSlider.create(amountSlider, {
        start: [0, 100],
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    });
    amountSlider.noUiSlider.on('update', (values, handle) => {
        amounMinMax[handle].textContent = Math.round(values[handle])
    })
}
if (releaseSlider) {
    noUiSlider.create(releaseSlider, {
        start: [1990, 2022],
        connect: true,
        step: 1,
        range: {
            'min': 1990,
            'max': 2022
        }
    });
    releaseSlider.noUiSlider.on('update', (values, handle) => {
        releaseMinMax[handle].textContent = Math.round(values[handle])
    })
}
