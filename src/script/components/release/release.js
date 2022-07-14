import Range from "../range/range";

export default class Release {
    constructor(data) {
        this.data = data;
        this.link = document.querySelector('.sorts__release');
    }

    draw() {
        let min = this.data[0].release;
        let max = 0;
        this.data.forEach(e => {
            min = (min > e.release) ? e.release : min;
            max = (max < e.release) ? e.release : max;
        });

        if (this.data.length > 1) {
            this.link.innerHTML = '';

            const sortsReleaseTitle = document.createElement('h3');
            sortsReleaseTitle.className = 'sorts__release__title';
            sortsReleaseTitle.textContent = 'Год выпуска';

            const sortsReleaseRange = document.createElement('div');
            sortsReleaseRange.className = 'sorts__release__range';
            sortsReleaseRange.innerHTML = `
                <p class="sorts__release__from">От</p>
                <p class="sorts__release__mim">${min}</p>
                <p class="sorts__release__before">До</p>
                <p class="sorts__release__max">${max}</p>
            `

            const sortsReleaseSlider = document.createElement('div');
            sortsReleaseSlider.className = 'sorts__release__slider';

            this.link.append(sortsReleaseTitle, sortsReleaseRange, sortsReleaseSlider)

            let releaseMinMax = [document.querySelector('.sorts__release__mim'), document.querySelector('.sorts__release__max')];

            const range = new Range(sortsReleaseSlider, min, max, releaseMinMax)
            range.draw()
        }

        
    }
}