export default class Sorts {
    constructor(data) {
        this.data = data;
    }

    sortsNameDecrease() {
        return this.data.sort((a,b) => a.name > b.name ? 1 : -1)
    }
    sortsNameIncreasing() {
        return this.data.sort((a,b) => a.name < b.name ? 1 : -1)
    }
    sortsReleaseDecrease() {
        return this.data.sort((a,b) => a.release > b.release ? 1 : -1)
    }
    sortsReleaseIncreasing() {
        return this.data.sort((a,b) => a.release < b.release ? 1 : -1)
    }
}