const findGif = () => {
  const img = document.querySelector('img');
  const thing = document.querySelector('#thing');
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=F4IlcBiLLi7W7nePrVK8jqcCrNmnneWv&s=${thing.value}`;
  fetch(url, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => (img.src = res.data.images.original.url));
};

document.querySelector('#find').addEventListener('click', findGif);
