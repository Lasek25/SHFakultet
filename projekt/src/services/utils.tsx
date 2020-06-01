const jsonData = {
    get: (url: string) => fetch(url)
        .then(resp=>resp.json()),
};

export default jsonData;
//export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_FILMS_API_KEY}`;