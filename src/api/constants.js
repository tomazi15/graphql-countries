export const API_URL = process.env.REACT_APP_GRAPHQL;

export const CONTINENTS_QUERY = `{
  continents {
    name
    code
  }
}`;

export const COUNTRIES_QUERY = `query ($code: ID!) {
  continent(code: $code) {
    name
    countries {
      code
      name
      emoji
    }
  }
}`;

export const COUNTRY_DETAILS_QUERY = `query ($code: ID!) {
  country(code: $code) {
    code
    name
    currency
    phone
    capital
    languages {
      name
    }
  }
}`;
