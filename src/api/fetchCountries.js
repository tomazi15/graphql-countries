import { API_URL, COUNTRIES_QUERY } from "./constants";

const fetchCountries = async (continent) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: COUNTRIES_QUERY,
      variables: { code: continent },
    }),
  });

  if (response.status >= 400) {
    throw new Error("Error fetching data");
  } else {
    return await response.json();
  }
};

export default fetchCountries;
