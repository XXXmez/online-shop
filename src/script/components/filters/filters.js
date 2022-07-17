import RenderCard from "../card/render";

class Sorts {
    constructor(data) {
        this.data = data;
        this.dataNew = [];
    }

    sort() {
        const companyButtonActive = document.querySelectorAll('.company__button-active');

        const sortsAmountMim = document.querySelector('.sorts__amount__mim').textContent;
        const sortsAmountMax = document.querySelector('.sorts__amount__max').textContent;

        const sortsReleaseMim = document.querySelector('.sorts__release__mim').textContent;
        const sortsReleaseMax = document.querySelector('.sorts__release__max').textContent;

        const sortsColorsItemActiv = document.querySelectorAll('.sorts__colors__block-active');

        const sortsSizesItem = document.querySelectorAll('.sorts__sizes__item-active p');

        const sortsPopularCheckbox = document.querySelector('.sorts__popular__checkbox');

        const searchInput = document.querySelector('.catalog__menu__search-input');

        const dataSort = [...this.data];
        const dataNew = [];
        
        dataSort.forEach(element => {
            let elemy = element;
            
            // company
            if (companyButtonActive.length > 0) {
                elemy = Array.from(companyButtonActive).map(elem1 => {
                    if (elemy.company == elem1.textContent) return elemy
                    else return ''
                })
                elemy.forEach(e => {
                    if (e != '') elemy = e
                })
            }
            
            // amount
            if (!Array.isArray(elemy) && typeof elemy == 'object') {
                elemy = (elemy.amount >= sortsAmountMim && elemy.amount <= sortsAmountMax) ? elemy : '1';
            } else {
                return 
            }
            // release
            if (!Array.isArray(elemy) && typeof elemy == 'object') {
                elemy = (elemy.release >= sortsReleaseMim && elemy.release <= sortsReleaseMax) ? elemy : '2';
            } else {
                return
            }

            // color
            if (sortsColorsItemActiv.length > 0) {
                //console.log(sortsColorsItemActiv[0].style.background);
                elemy = Array.from(sortsColorsItemActiv).map(elem1 => {
                    if (elemy.color == elem1.style.background) return elemy
                    else return ''
                })
            
                elemy.forEach(e => {
                    if (e != '') elemy = e
                })
            }
            
            // size
            if (sortsSizesItem.length > 0) {
                elemy = Array.from(sortsSizesItem).map(elem1 => {
                    if (elemy.size == elem1.textContent) return elemy
                    else return ''
                })
            
                elemy.forEach(e => {
                    if (e != '') elemy = e
                })
            }

            // popular
            if (sortsPopularCheckbox.checked) {
                elemy = elemy.popular == sortsPopularCheckbox.checked ? elemy : '2';
            }
            
            // seach
            if (searchInput.value.length > 0 && !Array.isArray(elemy) && typeof elemy == 'object') {
                elemy = elemy.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) >=0 ? elemy : '2';
            }
        
            if (!Array.isArray(elemy) && typeof elemy == 'object') {
                // console.log(elemy);
                dataNew.push(elemy)
                
            }
        })

        // console.log("data new: ", dataNew);
        const renderCards = new RenderCard(dataNew);
        renderCards.render()
    }
}

export default Sorts;