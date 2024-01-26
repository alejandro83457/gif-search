const findGif = () => {
  const thing = document.querySelector('#thing');
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=F4IlcBiLLi7W7nePrVK8jqcCrNmnneWv&s=${thing.value}`;
  fetchGif(url);
};

const fetchGif = (url) => {
  const img = document.querySelector('img');
  fetch(url, { mode: 'cors' })
    .then((res) => {
      if (res.ok) return Promise.resolve(res);
      else return Promise.reject(res);
    })
    .then((res) => res.json())
    .then((res) => {
      img.removeAttribute('hidden');
      img.src = res.data.images.original.url;
    })
    .catch((err) => {
      if (err.status == 401) console.log('401 error.');
    });
};

document.querySelector('#find').addEventListener('click', findGif);
