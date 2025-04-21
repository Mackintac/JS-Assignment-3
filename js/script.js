// the base url for the api
const apiUrl = 'https://restcountries.com/v3.1';

// countries to search by for visual examples
const canada = {
  name: 'canada',
  altName: 'Ca',
  region: 'Americas',
  subregion: 'North America',
  currency: 'cad',
  code: '124',
  demonyms: 'Canadian',
  capital: 'Ottawa',
  language: 'English',
};

const brazil = {
  name: 'brazil',
  altname: 'brasil',
  region: 'americas',
  subregion: 'south america',
  currency: 'brl',
  code: '076',
  demonyms: 'brazilian',
  capital: 'brasilia',
  language: 'portuguese',
};

const egypt = {
  name: 'egypt',
  altname: 'Arab Republic of Egypt',
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
    const response = await fetch(apiUrl + '/all');

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const resJson = await response.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
}

async function getByName(country) {
  try {
    const response = await fetch(nameApiUrl + country.name);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getByFullName(country) {
  try {
    const response = await fetch(
      nameApiUrl + country.name + fullNameApiUrlEnding
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getAllApiResponse();
