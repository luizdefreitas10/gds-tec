export default async function fetchApi () {
  try {
    const endpoint = 'https://619542f674c1bd00176c6ca2.mockapi.io/api/v1/Data';
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse[0].date);
    return jsonResponse[0].date;
  } catch (error) {
    console.log(error);
  }
}