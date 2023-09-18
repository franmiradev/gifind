const API_KEY = "x6J8HXa6jE2yL6tpJOzGjHUgoucZwIOr"

export default function getGifs({keyword = 'morty'} = {}) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
           const {images, title, id} = image
           const {url} = images.fixed_width_downsampled
           return {title, id, url}
        })

      return gifs
      }
    })
}