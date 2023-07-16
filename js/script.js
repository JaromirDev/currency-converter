{
const plnElement = document.querySelector(".js-pln");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const pressButton = document.querySelector(".js-calculate")
const clearButton = document.querySelector(".js-clear");
const formElement = document.querySelector(".js-form")
let currencySymbol = '';

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

pressButton.addEventListener("click", () => {
    const pln = parseFloat(plnElement.value);
    let currency = currencyElement.value;

    switch (currency) {
        case 'euro':
            currency = 4.4871;
            currencySymbol = '€';
            break;
        case 'usd':
            currency = 4.1555;
            currencySymbol = '$';
            break;
        case 'chf':
            currency = 4.6475;
            currencySymbol = 'CHF';
            break;
        case 'cny':
            currency = 1.6377;
            currencySymbol = '¥';
            break;
    }

    let result = pln / currency;
    if (!isNaN(result)) {
        resultElement.textContent = `${result.toFixed(2)} ${currencySymbol}`;
    } else {
        resultElement.textContent = "Błąd - wprowadź poprawną liczbę!";
    }

});

clearButton.addEventListener("click", () => {
    plnElement.value = "";
    resultElement.textContent = "";
});

}