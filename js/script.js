let plnElement = document.querySelector(".js-pln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let pressButton = document.querySelector(".js-calculate")
let clearButton = document.querySelector(".js-clear");
let formElement = document.querySelector(".js-form")
let currencySymbol = '';

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});

pressButton.addEventListener("click", () => {
    let pln = parseFloat(plnElement.value);
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