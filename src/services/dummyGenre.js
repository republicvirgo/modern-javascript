export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", jenis: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", jenis: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", jenis: "Thriller" }
];

export function getGenres() {
  return genres.filter(g => g);
}
