import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.page";
import SearchCampground from "./pages/search-campground.page";
import Nav from "./components/navigation.component";
import Login from "./pages/login.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path="/search-campground" element={<SearchCampground />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
