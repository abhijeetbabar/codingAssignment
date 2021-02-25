const baseUrl = "http://localhost:8000";

export function fetchCalEvents() {
  const url = baseUrl + "/inspections/?format=json";
  return fetch(url).then(handleResponse).catch(handleError);
}

async function handleResponse(response) {
  if (response.ok) return response.json();

  throw new Error("Somthing went wrong status code: " + response.status);
}

function handleError(error) {
  console.error("API Error : " + error);
  throw error;
}
