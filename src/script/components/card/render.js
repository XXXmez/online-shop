import Card from "./card";
import Sorts from "../sorts/sorts";

const catalogProducts = document.querySelector('.catalog__products');
const catalogMenuCount = document.querySelector('.catalog__menu__count');

export default class RenderCard {
    constructor(data) {
        this.data = data;
        this.sort = document.querySelector('#sort');
    }

    render() {
        let sortData = [];
        if (this.sort.value == 'sortsNameDecrease') {
            sortData = new Sorts(this.data).sortsNameDecrease();
        }
        if (this.sort.value == 'sortsNameIncreasing') {
            sortData = new Sorts(this.data).sortsNameIncreasing();
        }
        if (this.sort.value == 'sortsReleaseDecrease') {
            sortData = new Sorts(this.data).sortsReleaseDecrease();
        }
        if (this.sort.value == 'sortsReleaseIncreasing') {
            sortData = new Sorts(this.data).sortsReleaseIncreasing();
        }
        
        catalogProducts.innerHTML = '';
        catalogMenuCount.textContent = `${this.data.length} product`

        if (sortData.length == 0) {
            catalogProducts.innerHTML = 'По данному запросу ничего нет!';
            return
        }
        
        sortData.forEach(element => {
            new Card(element, catalogProducts).draw()
        });
    }
}