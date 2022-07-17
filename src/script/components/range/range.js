import noUiSlider from "../../nouislider.min.js"
import data from "../../../data/data.js";
import Sorts from "../filters/filters.js";

export default class Range {
    constructor(elem, min, max, minMax){
        this.elem = elem;
        this.min = min;
        this.max = max;
        this.minMax = minMax;

        this.data = data;
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
            const sorts = new Sorts(this.data)
            sorts.sort()
        })
    }
}