const key = '4W7X9H9W0GMU12MP';
const functionName = 'CURRENCY_EXCHANGE_RATE';
const from_currency = 'BTC';
const to_currency = 'EUR';
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&from_currency=${from_currency}&to_currency=${to_currency}&apikey=${key}`;

const currencyFromName = document.querySelector("#currencyfrom-name");
const currencyToName = document.querySelector("#currencyto-name");
const exchangeRate = document.querySelector("#exchangerate");

axios.get(apiUrl)
    .then((response) => {
      const responseBody = response.data;
      const exchange = responseBody['Realtime Currency Exchange Rate'];
        console.log(responseBody);

        currencyFromName.textContent = exchange['2. From_Currency Name'];
        currencyToName.textContent = exchange['4. To_Currency Name'];
        exchangeRate.textContent = exchange['5. Exchange Rate'];
        // const fromCurrency = responseBody[1];
        // console.log(fromCurrency);
      

    })
    .catch( (err) => console.log(err));