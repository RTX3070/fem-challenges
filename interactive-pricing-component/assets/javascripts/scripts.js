const pagesCount = document.querySelector('.pages');
const priceMonth = document.querySelector('.amount');
const slider = document.querySelector('.range');
const billingPlan = document.querySelector('.checkbx');

const pageViews = [10, 50, 100, 500, 1];
const monthlyPrices = [8, 12, 16, 24, 36];

slider.addEventListener('input', function() {
    slider.max = pageViews.length-1;
    pagesCount.textContent = `${pageViews[slider.value]}K`;

    if (!billingPlan.checked) {
        priceMonth.textContent = `$${monthlyPrices[slider.value]}.00`;
        return;
    }
    priceMonth.textContent = `$${monthlyPrices[slider.value] * 0.25}.00`;
});