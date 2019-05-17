let url = 'https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d876e43be4e44cf78381b3814d7998e0';

export function newsApi() {
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data;
    })
}