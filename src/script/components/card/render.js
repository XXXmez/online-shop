import Card from "./card";

const catalogProducts = document.querySelector('.catalog__products');
const catalogMenuCount = document.querySelector('.catalog__menu__count');

export default class RenderCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        console.log('render data: ', this.data);
        catalogProducts.innerHTML = '';
        catalogMenuCount.textContent = `${this.data.length} product`
        
        this.data.forEach(element => {
            new Card(element, catalogProducts).draw()
        });
    }
}