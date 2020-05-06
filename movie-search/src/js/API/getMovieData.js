import store from '../store';

async function getMovieData(name, page) {
    console.log('async start');
    try {
      const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=fb544fc0`;
      const res =  await fetch(url);
      const data = await res.json();
      store.totalResults = data.totalResults;
      if (data.Response === 'False') {
        throw (data.Error);
      }
      
      const container = await Promise.all(
      data.Search.map(async (elem) => {
        if (page === 1) {
          store.dataBase = [];
        }
        const item = elem;
        const rating = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=fb544fc0`);
        const dataRating = await rating.json();
        item.rating = dataRating.imdbRating;
        return item;
      })
    );

    store.dataBase = [...store.dataBase, ...container];
    } catch (err) {
      document.querySelector('.error__text').textContent = `«${store.searchText}»: ${err}`;
    };
    console.log(store.dataBase)
}

export default getMovieData;