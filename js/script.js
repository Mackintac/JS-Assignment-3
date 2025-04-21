async function getAllApiResponse() {
  const apiUrl = 'https://restcountries.com/v3.1/all';

  try {
    const allApiResponse = await fetch(apiUrl);

    if (!allApiResponse.ok) {
      throw new Error(`Response status: ${allApiResponse.status}`);
    }

    const resJson = await allApiResponse.json();
    console.log(resJson);
  } catch (error) {
    console.log(error.message);
  }
}

getAllApiResponse();
