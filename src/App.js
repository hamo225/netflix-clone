import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchtrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
