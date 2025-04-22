// the base url for the api
const apiUrl = 'https://restcountries.com/v3.1';

// countries to search by for visual examples
const canada = {
  name: 'canada',
  altname: 'canada',
  region: 'Americas',
  subregion: 'North America',
  currency: 'cad',
  code: '124',
  demonyms: 'Canadian',
  capital: 'Ottawa',
  language: 'English',
};

const brazil = {
  name: 'brasil',
  altname: 'brazil',
  region: 'americas',
  subregion: 'south america',
  currency: 'brl',
  code: '076',
  demonyms: 'brazilian',
  capital: 'brasilia',
  language: 'portuguese',
};

const egypt = {
  name: 'Arab Republic of Egypt',
  altname: 'egypt',
  region: 'africa',
  subregion: 'Northern Africa',
  currency: 'egp',
  code: '818',
  demonyms: 'egyptian',
  capital: 'Cairo',
  language: 'portuguese',
};

// search the country by a common or official version of it's name
// ex. /name/canada
const nameApiUrl = apiUrl + '/name/';

// search for the country by it's exact full name
// ex. https://restcountries.com/v3.1/name/Canada?fullText=true
const fullNameApiUrlEnding = '?fullText=true';

// filter your search response output by the specific fields you want
// ex.  https://restcountries.com/v3.1/name/Canada?fields=name,capital,currencies
const filterFieldsApiUrlEnding = '?fields=';

// search by country's currency
// ex. /currency/cad
const currencyApiUrl = apiUrl + '/currency/';

// search by the country code or what entry it is in the list of all countries
// ex. /alpha/170
const countryCodeApiUrl = apiUrl + '/alpha/';

// what a citizen of that country is called
// ex. /demonym/canadian
const demonymApiUrl = apiUrl + '/demonym/';

// search by what language is spoken
// ex. /lang/english
const languageApiUrl = apiUrl + '/lang/';

// search by the capital city of the country
// ex. /capital/london
const capitalApiUrl = apiUrl + '/capital/';

// search by the region in which the countries are located
// ex. /region/europe
const regionApiUrl = apiUrl + '/region/';

// search by the region in which the countries are located
// ex. /region/Northern Europe
const subRegionApiUrl = apiUrl + '/subregion/';

async function getAllApiResponse() {
  try {
    const url = apiUrl + '/all';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const resJson = await response.json();
    console.log(resJson);

    const responseDiv = document.getElementById('all-countries__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(resJson, null, 2);
    }

    const responseUrl = document.getElementById('all-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByName(country) {
  try {
    const url = nameApiUrl + country.name;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-name__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('name-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByFullName(country) {
  try {
    const url = nameApiUrl + country.altname + fullNameApiUrlEnding;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-fullname__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('fullname-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByCurrency(country) {
  try {
    const url = currencyApiUrl + country.currency;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-currency__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('currency-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByCountryCode(country) {
  try {
    const url = countryCodeApiUrl + country.code;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-code__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('code-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByDemonym(country) {
  try {
    const url = demonymApiUrl + country.demonyms;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-demonym__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('demonym-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByLanguage(country) {
  try {
    const url = languageApiUrl + country.language;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-language__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('language-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByCapital(country) {
  try {
    const url = capitalApiUrl + country.capital;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-capital__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('capital-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getByRegion(country) {
  try {
    const url = regionApiUrl + country.region;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-region__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('region-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function getBySubRegion(country) {
  try {
    const url = subRegionApiUrl + country.subregion;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const responseDiv = document.getElementById('country-subregion__response');
    if (responseDiv) {
      responseDiv.textContent = JSON.stringify(data, null, 2);
    }

    const responseUrl = document.getElementById('subregion-response_url');
    if (responseUrl) {
      responseUrl.textContent = url;
    }
  } catch (error) {
    console.log(error.message);
  }
}

// function to update all of the queries with the respective country object provided as an arguement
function onSubmit(country) {
  getByName(country);
  getByFullName(country);
  getByCurrency(country);
  getByCountryCode(country);
  getByDemonym(country);
  getByLanguage(country);
  getByCapital(country);
  getByRegion(country);
  getBySubRegion(country);
}

// event listeners added to each of the buttons to call the onSubmit function for their respective country
document.getElementById('button-canada').addEventListener('click', () => {
  onSubmit(canada);
});

document.getElementById('button-brazil').addEventListener('click', () => {
  onSubmit(brazil);
});

document.getElementById('button-egypt').addEventListener('click', () => {
  onSubmit(egypt);
});

function init() {
  getAllApiResponse();
  getByName(canada);
  getByFullName(canada);
  getByCurrency(canada);
  getByCountryCode(canada);
  getByDemonym(canada);
  getByLanguage(canada);
  getByCapital(canada);
  getByRegion(canada);
  getBySubRegion(canada);
}

init();
