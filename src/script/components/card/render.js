import Card from "./card";

const catalogProducts = document.querySelector('.catalog__products');

export default class RenderCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        catalogProducts.innerHTML = '';
        
        this.data.forEach(element => {
            new Card(element, catalogProducts).draw()
        });
    }
}