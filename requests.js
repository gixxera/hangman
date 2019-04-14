const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
}

const getCountry = async (countryCode) => {
  const response = await fetch("http://restcountries.eu/rest/v2/all")

  if (response.status === 200) {
    const data = await response.json();
    return country = data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to get country");
  }
}

const getLocation = async () => {
  const response = await fetch("http://ipinfo.io/json?token=d287cfb2d7cc05");

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Unable to fetch location');
  }
}