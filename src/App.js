import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const [progress, setProgresses] = useState(0)
  const apiKey = "e07a91a1f5f548619d21f2404845d0bd";
  // process.env.REACT_APP_NEWSAPI
  const setProgresseses = (progress) => {
    this.setState({ progress: progress });
  };
  const c = "this";
  const pageSize = 5;

    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => setProgresses(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgresses}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgresses}
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgresses}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgresses}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgresses}
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgresses}
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgresses}
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  
}
export default App