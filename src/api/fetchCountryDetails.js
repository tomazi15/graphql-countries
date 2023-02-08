import { API_URL, COUNTRY_DETAILS_QUERY } from "./constants";

const fetchCountryDetails = async (countryCode) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: COUNTRY_DETAILS_QUERY,
      variables: { code: countryCode },
    }),
  });

  if (response.status >= 400) {
    throw new Error("Error fetching data");
  } else {
    return await response.json();
  }
};

export default fetchCountryDetails;
