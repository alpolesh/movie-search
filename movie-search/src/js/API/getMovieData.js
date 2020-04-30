import store from '../store';

async function getMovieData(name, page) {
    console.log('async start');
      const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=fb544fc0`;
      const res = await fetch(url);
      const data = await res.json();
      store.dataBase = [];
      

      const container = await Promise.all(
      data.Search.map(async (elem) => {
        const item = elem;
        const rating = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=fb544fc0`);
        const dataRating = await rating.json();
        item.rating = dataRating.imdbRating;
        return item;
      })
    );
      
    store.dataBase = [...store.dataBase, ...container];
    console.log(store.dataBase);
      // -----------------
      // eslint-disable-next-line no-restricted-syntax
      // for (const elem of data.Search) {
      //   const item = elem;
      //   const rating = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=fb544fc0`);
      //   const dataRating = await rating.json();
        
      //   item.rating = dataRating.imdbRating;
      //   console.log(item);
      //   store.dataBase.push(item);
      // }
      
}

export default getMovieData;