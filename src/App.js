import "./App.css";

import Layout from "./components/Layout";
import Home from "./router/Home";
import List from "./router/List";
import Detail from "./router/Detail";
import History from "./router/History";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/history" element={<History />} />
          <Route path="/info/:id" element={<Detail />} />
        </Route>
      </Routes>
  );
}

export default App;
