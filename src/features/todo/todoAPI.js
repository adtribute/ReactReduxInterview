const RANDOM_API_BASE_URL = 'https://random-data-api.com/api/';
const COMPANY_ENDPOINT = 'company/random_company';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function randomFunction() {
  console.log('called random f')
  return 27;
}

export async function randomDataFetch() {
  const randomCompanyUrl = `${RANDOM_API_BASE_URL}${COMPANY_ENDPOINT}`;
  const data = await (await fetch(randomCompanyUrl)).json();
  return data.business_name;
}
