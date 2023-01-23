import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Header, Home, MovieDetail, PageNotFound } from "./components";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
