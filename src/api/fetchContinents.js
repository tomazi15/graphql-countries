import { API_URL, CONTINENTS_QUERY } from "./constants";

const fetchContinents = async () => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: CONTINENTS_QUERY,
    }),
  });

  if (response.status >= 400) {
    throw new Error("Error fetching data");
  } else {
    return await response.json();
  }
};

export default fetchContinents;
