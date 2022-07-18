import {basket} from "../app/app"

export default class Card {
    constructor (data, link) {
        this.data = data;
        this.link = link;
    }

    draw() {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'catalog__product product';
        cardProduct.innerHTML = `
            <div class="product__img">
                <img src="./images/${this.data.img}" alt="img">
            </div>
            <div class="product__desc">
                <div class="product__desc__name">${this.data.name}</div>
                <div class="product__desc__price">${this.data.price} $</div>
                <div class="product__desc__amount">Кол-во шнурков: ${this.data.amount}</div>
                <div class="product__desc__size">Размер: ${this.data.size}</div>
                <div class="product__desc__release">${this.data.release}</div>
                <div class="product__desc__color product__desc__color_${this.data.color}" style="background: ${this.data.color};"></div>
                <div class="product__desc__company">${this.data.company}</div>
            </div>
            <div class="product__button">
                <div class="product__button__add">
                    <button class="basket__add">Add</button>
                </div>
                <div class="product__button__delete">
                    <button class="basket__delete">Delete</button>
                </div>
            </div>
        `;

        if (this.data.popular) {
            cardProduct.style.border = '2px solid #3eb3ea';
            cardProduct.children[0].style.margin = '18px';
        }

        const productButtonAdd = cardProduct.querySelector('.product__button__add');
        const productButtonDelete = cardProduct.querySelector('.product__button__delete');
        const basketAdd = cardProduct.querySelector('.basket__add');
        const basketDelete = cardProduct.querySelector('.basket__delete');

        const currentBasket = basket.getArr();
        currentBasket.forEach(e => {
            if (e.id == this.data.id) {
                productButtonAdd.style.display = 'none';
                productButtonDelete.style.display = 'block';
            }
        })

        basketAdd.addEventListener('click', () => {
            this.basketAdd(this.data, productButtonAdd, productButtonDelete)
        });

        basketDelete.addEventListener('click', () => {
            this.basketDelete(this.data, productButtonDelete, productButtonAdd)
        });

        this.link.append(cardProduct)
    }

    basketAdd(data, elemO, elemN) {
        elemO.style.display = 'none';
        elemN.style.display = 'block';

        basket.add(data)
    }

    basketDelete(data, elemO, elemN) {
        elemO.style.display = 'none';
        elemN.style.display = 'block';

        basket.delete(data)
    }
}