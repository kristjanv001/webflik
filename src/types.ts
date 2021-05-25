export type Requests = {
  fetchTrending: string;
  fetchNetflixOriginals: string;
  fetchTopRated: string;
  fetchActionMovies: string;
  fetchComedyMovies: string;
  fetchHorrorMovies: string;
  fetchRomanceMovies: string;
  fetchDocumentaries: string;
};

export type RowProps = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
