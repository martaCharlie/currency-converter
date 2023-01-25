{
const calculateResult = (amount, currency) => {
    const rateEUR = 4.69;
    const rateGBR = 5.33;
    const rateUSD = 4.41;
    const rateNOK = 0.45;

    switch (currency) {
        case "EUR":
            return amount / rateEUR;

        case "GBR":
            return amount / rateGBR;

        case "USD":
            return amount / rateUSD;

        case "NOK":
            return amount / rateNOK
    }
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
}
const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let rate = calculateResult(amount, currency);
    const result = amount / rate;

    updateResultText(amount, result, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit); 
};

init();
}