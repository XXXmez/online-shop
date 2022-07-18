export default class Basket {
    constructor() {
        this.basketArr = [];
        this.maxLengthBasket = 20;
        this.blockBasket = document.querySelector('.nav__basket');
    }

    getArr() {
        return this.basketArr
    }

    add(arr) {
        this.basketArr.push(arr)

        if (this.basketArr.length > this.maxLengthBasket) {
            alert('Вы хотите слишком много!!!');
            return
        }

        this.blockBasket.innerHTML = `Basket <span class="nav__basket-span">${this.basketArr.length}</span>`
    }
    delete(arr){
        this.basketArr.forEach((e, i) => {
            if (e.id == arr.id) {
                this.basketArr.splice(i, 1)
            }
        })
        this.blockBasket.innerHTML = `Basket <span class="nav__basket-span">${this.basketArr.length}</span>`
    }

    
}

