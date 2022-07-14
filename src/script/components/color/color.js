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
                blockColor.className = 'sorts__colors__item_';
                blockColor.className += e.color;
                blockColor.style.background = e.color
                
                item.append(blockColor);
                list.append(item);
            }
        });

        

        this.link.append(list)
    }
}