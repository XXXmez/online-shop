import Company from "../company/company"

export default class App {
    constructor(data) {
        this.data = data;
    }

    launch() {
        const company = new Company(this.data);
        company.draw()
    }
}