const switchPlanBtn = document.querySelector('.checkbox');
const prices = document.querySelectorAll('.price');

const monthlyPrices = ['19.99', '24.99', '39.99'];
const annualPrices = ['199.99', '249.99', '399.99'];

const switchPlan = () => {
    return switchPlanBtn.checked ? monthlySub() : annualSub();
};

const monthlySub = () => {
    prices.forEach((price, i) => {
        price.innerHTML = `<span>&dollar; </span>${monthlyPrices[i]}`;
    });
};

const annualSub = () => {
    prices.forEach((price, i) => {
        price.innerHTML = `<span>&dollar; </span>${annualPrices[i]}`;
    });
};

switchPlanBtn.addEventListener('click', switchPlan);

annualSub();