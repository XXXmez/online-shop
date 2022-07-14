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
            }
        });

        

        this.link.append(list)
    }
}