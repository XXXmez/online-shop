import Range from "../range/range";

export default class Amount {
    constructor(data) {
        this.data = data;
        this.link = document.querySelector('.sorts__amount');
    }

    draw() {
        let min = this.data[0].amount;
        let max = 0;
        this.data.forEach(e => {
            min = (min > e.amount) ? e.amount : min;
            max = (max < e.amount) ? e.amount : max;
        });

        if (this.data.length > 1) {
            this.link.innerHTML = '';

            const sortsAmountTitle = document.createElement('h3');
            sortsAmountTitle.className = 'sorts__amount__title';
            sortsAmountTitle.textContent = 'В наличии';

            const sortsAmountRange = document.createElement('div');
            sortsAmountRange.className = 'sorts__amount__range';
            sortsAmountRange.innerHTML = `
                <p class="sorts__amount__from">От</p>
                <p class="sorts__amount__mim">${min}</p>
                <p class="sorts__amount__before">До</p>
                <p class="sorts__amount__max">${max}</p>
            `

            const sortsAmountSlider = document.createElement('div');
            sortsAmountSlider.className = 'sorts__amount__slider';

            this.link.append(sortsAmountTitle, sortsAmountRange, sortsAmountSlider)

            let amountMinMax = [document.querySelector('.sorts__amount__mim'), document.querySelector('.sorts__amount__max')];

            const range = new Range(sortsAmountSlider, min, max, amountMinMax)
            range.draw()
        }

        
    }
}