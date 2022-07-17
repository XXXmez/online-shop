import Sorts from "../filters/filters";

export default class Color {
    constructor(data){
        this.data = data;
        this.link = document.querySelector('.sorts__colors__options > div')
    }

    draw() {
        this.link.innerHTML = ''
        const colorArr = [];
        const list = document.createElement('ul');
        list.className = 'sorts__colors__list';

        this.data.forEach(e => {
            if (colorArr.indexOf(e.color) == -1) {
                colorArr.push(e.color);
                
                const item = document.createElement('li');
                
                item.className = 'sorts__colors__item';

                const blockColor = document.createElement('div');
                blockColor.className = 'sorts__colors__block';
                //blockColor.className += e.color;
                blockColor.style.background = e.color
                
                item.append(blockColor);
                list.append(item);

                item.addEventListener('click', (e) => {
                    this.sort(e.currentTarget)
                })
            }
        });

        this.link.append(list)
    }

    sort (e) {
        if (!e.firstChild.classList.contains(e.firstChild.classList[0]+'-active')) {
            e.firstChild.classList.add(e.firstChild.classList[0]+'-active')
        } else {
            e.firstChild.classList.remove(e.firstChild.classList[0]+'-active')
        }
        
        const sorts = new Sorts(this.data);
        sorts.sort();
    }
}