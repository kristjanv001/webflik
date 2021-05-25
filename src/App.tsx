import { Row } from "./Row"
import { requests } from "./requests"
import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import "./styles.css"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="TOP" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror!" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Docs" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;

