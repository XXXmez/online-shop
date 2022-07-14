import noUiSlider from "../../nouislider.min.js"
import App from "../app/app.js";
import data from "../../../data/data.js";

export default class Range {
    constructor(elem, min, max, minMax){
        this.elem = elem;
        this.min = min;
        this.max = max;
        this.minMax = minMax;
    }
    draw(){
        noUiSlider.create(this.elem, {
            start: [this.min, this.max],
            connect: true,
            step: 1,
            range: {
                'min': this.min,
                'max': this.max
            }
        });
        this.elem.noUiSlider.on('slide', (values, handle) => {
            this.minMax[handle].textContent = Math.round(values[handle]);
        })
        this.elem.noUiSlider.on('end', (values, handle) => {
            console.log('Запуск функции');
            // const app = new App(data);
            // app.launch();
        })
    }
}