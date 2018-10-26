import * as genresAPI from "./dummyGenre";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    judul: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", jenis: "Action" },
    stok: 6,
    rating: 2.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    judul: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", jenis: "Action" },
    stok: 5,
    rating: 2.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    judul: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", jenis: "Thriller" },
    stok: 8,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    judul: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", jenis: "Comedy" },
    stok: 7,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    judul: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", jenis: "Comedy" },
    stok: 7,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    judul: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", jenis: "Comedy" },
    stok: 7,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    judul: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", jenis: "Thriller" },
    stok: 7,
    rating: 4.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    judul: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", jenis: "Thriller" },
    stok: 4,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    judul: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", jenis: "Action" },
    stok: 7,
    rating: 3.5,
    tglPublish: "2018-10-10T19:04:28.809Z",
    like: true
  }
];

export function getMovies() {
  return movies;
}

//---------------------------------------------------------------------------

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.jenis = movie.jenis;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.stok = movie.stok;
  movieInDb.rating = movie.rating;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
