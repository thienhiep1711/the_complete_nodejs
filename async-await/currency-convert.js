const axios = require("axios");
const key = '47be7e2dca7e1a3b0a4c26e27f61226a';
//http://data.fixer.io/api/latest?access_key=47be7e2dca7e1a3b0a4c26e27f61226a
//https://restcountries.eu/rest/v2/currency/usd

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${key}`);
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if (isNaN(rate)) {
      throw new Error();
    }

    return rate;
  } catch (error) {
    throw new Error(`Unable to get exchange rate for ${from} and  ${to}`)
  }

};


// const getCountries = (currencyCode) => {
//   return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
//     return response.data.map((country) => {
//         return country.name;
//     })
//   })
// };

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name)
  } catch (error) {
    throw new Error(`Unable to get currency for ${currencyCode}`)
  }

};

// const convertCurrency = (from, to, amount) => {
//   let convertedAmount;
//   return getExchangeRate(from, to).then((rate) => {
//     convertedAmount = (amount * rate).toFixed(2);
//     return getCountries(to);
//   }).then((countries) => {
//     return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries : ${countries.join(', ')}`;
//   })
// }

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const convertedAmount = (amount * rate).toFixed(2);
  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries : ${countries.join(', ')}`;
}

convertCurrency('USD', 'MYR', 20).then((message) => {
  console.log(message);
}).catch((e) => {
  console.log(e.message);
})

const add = async (a, b) => a + b;

const doWork = async () => {
  try {
    const result = await add(19, 111111);
    return result;
  } catch (error) {
    return 10;
  }
}


doWork().then((data) => {
  console.log(data);
}).catch((e) => {
  console.log("Something went wrong!!!");
})

// getExchangeRate('USD', 'VND').then((rate) => {
//   console.log(rate);
// })

// getCountries('CAD').then((countries) => {
//   console.log(countries);
// })