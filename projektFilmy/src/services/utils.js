const http = {
    get: (url) => fetch(url).then(resp=>resp.json()),
};

export default http;
export const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_FILMS_API_KEY}`;
