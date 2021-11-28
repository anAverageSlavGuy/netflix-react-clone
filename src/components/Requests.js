const API_KEY = "ac597b3fab055517094b96df8017e3b7";
const API_HOST = "https://api.themoviedb.org/3";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=it`,
    fetchTrending: `${API_HOST}/trending/all/week?api_key=${API_KEY}&language=it`,
    fetchTopRated: `${API_HOST}/movie/top_rated?api_key=${API_KEY}&language=it`,
    fetchActionMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=28&language=it`,
    fetchComedyMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=35&language=it`,
    fetchHorrorMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=27&language=it`,
    fetchRomanceMovies: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=it`,
    fetchDocumentaries: `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=99&language=it`,

}

export default requests;