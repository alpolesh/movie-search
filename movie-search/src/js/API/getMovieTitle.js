import store from '../store';

async function getMovieTitle(name, page) {
    console.log('async start');
      const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=fb544fc0`;
      const res = await fetch(url);
      const data = await res.json();
      store.dataBase = [];
      await data.Search.forEach(elem => store.dataBase.push(elem));
      console.log(store.dataBase);
}

export default getMovieTitle;