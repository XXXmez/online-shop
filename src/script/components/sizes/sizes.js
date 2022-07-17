import Sorts from "../filters/filters";

export default class Sizes {
    constructor(data){
        this.data = data;
        this.link = document.querySelector('.sorts__sizes__options > div')
    }

    draw() {
        this.link.innerHTML = ''
        const sizesArr = [];
        const list = document.createElement('ul');
        list.className = 'sorts__sizes__list';

        this.data.forEach(e => {
            if (sizesArr.indexOf(e.size) == -1) {
                sizesArr.push(e.size);
                
                const item = document.createElement('li');
                
                item.className = 'sorts__sizes__item';

                const blockP = document.createElement('p');
                blockP.textContent = e.size
                
                item.append(blockP);
                list.append(item);

                item.addEventListener('click', (e) => {
                    this.sort(e.currentTarget)
                });
            }
        });

        this.link.append(list)
    }

    sort (e) {
        if (!e.classList.contains(e.classList[0]+'-active')) {
            e.classList.add(e.classList[0]+'-active')
        } else {
            e.classList.remove(e.classList[0]+'-active')
        }
        
        const sorts = new Sorts(this.data);
        sorts.sort();
    }
}