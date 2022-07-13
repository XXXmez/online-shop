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
                <img src="./images/sneakers1.jpg" alt="img">
            </div>
            <div class="product__desc">
                <div class="product__desc__name">Компьютер ASUS</div>
                <div class="product__desc__price">150 $</div>
                <div class="product__desc__amount">В наличии: 11</div>
                <div class="product__desc__release">2020</div>
                <div class="product__desc__color product__desc__color_yellow"></div>
                <div class="product__desc__company">ASUS</div>
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
        `
        console.log(cardProduct);
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