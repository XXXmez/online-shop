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
                <div class="product__desc__amount">В наличии: ${this.data.amount}</div>
                <div class="product__desc__size">Размер: ${this.data.size}</div>
                <div class="product__desc__release">${this.data.release}</div>
                <div class="product__desc__color product__desc__color_${this.data.color}" style="background: ${this.data.color};"></div>
                <div class="product__desc__company">${this.data.company}</div>
            </div>
            <div class="product__basket">
                <div class="product__basket__add__cart">
                    <button class="basket__add">Add</button>
                </div>
                <div class="product__basket__editing">
                    <button class="product__basket__away">-</button>
                    <div class="product__basket__count">0</div>
                    <button class="product__basket__add">+</button>
                </div>
            </div>
        `;
        this.link.append(cardProduct)

        const basketAdd = cardProduct.querySelector('.basket__add');
        basketAdd.addEventListener('click', () => {
            this.log()
        });
    }

    log() {
        console.log(this.data)
    }
}