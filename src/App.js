import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav></Nav>
      {/* Banner */}
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow //defaults to true
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
