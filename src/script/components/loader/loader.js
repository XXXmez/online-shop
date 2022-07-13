export default class loader {
    constructor(link) {
        this.dataLink = link;
    }

    load() {
        fetch(this.dataLink)
            .then((res)=> res.json)
            .then((data)=>console.log(data))
    }
}