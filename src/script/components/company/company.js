export default class Company {
    constructor(data) {
        this.data = data;
        this.sortsCompany = document.querySelector('.sorts__company');
    }

    draw() {
        this.sortsCompany.innerHTML = '';
        const company = document.createElement('div');
        company.className = 'company';

        const companyArr = [];

        this.data.forEach(e => {
            if (companyArr.indexOf(e.company) == -1) {
                const companyItem = document.createElement('div');
                companyItem.className = 'company__item';
                const companyButton = document.createElement('button');
                companyButton.className = 'company__button';

                companyButton.textContent = e.company;
                companyArr.push(e.company);

                companyItem.append(companyButton)
                company.append(companyItem);
            } else { return }
            
        });

        this.sortsCompany.append(company);
    }
}