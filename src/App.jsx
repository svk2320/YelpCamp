import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.page";
import SearchCampground from "./pages/search-campground.page";
import Nav from "./components/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path="/searchcampground" element={<SearchCampground />} />
      </Route>
    </Routes>
  );
};

export default App;
