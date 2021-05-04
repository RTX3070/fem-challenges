// DOM Elements needed
const switchPlanBtn = document.querySelector('input[type="checkbox"]');
const prices = document.querySelectorAll('p');

// Arrays with hardcoded prices for monthly and annual subscription
const monthlyPrices = ['19.99', '24.99', '39.99'];
const annualPrices = ['199.99', '249.99', '399.99'];

// Function to switch between monthly/annual subscription plan
function switchPlan() {
    return switchPlanBtn.checked ? annualSub() : monthlySub();
}

// Set monthly prices into DOM
function monthlySub() {
    prices.forEach((price, i) => {
        price.innerHTML = `<span>&dollar; </span>${monthlyPrices[i]}`;
    })
    switchPlanBtn.checked = false;
}

// Set annual prices into DOM
function annualSub() {
    prices.forEach((price, i) => {
        price.innerHTML = `<span>&dollar; </span>${annualPrices[i]}`;
    })
}

// Set monthly prices on page's first load
monthlySub();

// Call switchPlan on toggle switch button
switchPlanBtn.addEventListener('click', switchPlan);