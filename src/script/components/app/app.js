import Company from "../company/company"
import Amount from "../amount/amount";
import Release from "../release/release";
import Color from "../color/color";
import Sizes from "../sizes/sizes";
import RenderCard from "../card/render";

class App {
    constructor(data) {
        this.data = data;
    }

    launch() {
        const company = new Company(this.data);
        company.draw();

        const amount = new Amount(this.data);
        amount.draw();

        const release = new Release(this.data);
        release.draw();

        const color = new Color(this.data);
        color.draw();

        const sizes = new Sizes(this.data);
        sizes.draw();

        const renderCards = new RenderCard(this.data);
        renderCards.render()
    }
}

export {App}