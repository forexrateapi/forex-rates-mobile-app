import { API_KEY } from './Constant';

export const fetch_get = (url, date) => {
  const ROOT_URL = `https://api.forexrateapi.com/v1/${date ?? 'latest'}?api_key=${API_KEY}&`;
  console.log(ROOT_URL + url)
	return fetch(ROOT_URL + url,
    {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      }
    }
  ).then(response => {
    if(response.status === 200) {
      return response.json()
    } else {
      return response
    }
  })
  .catch((error) => {
    console.log(error)
  });
}
