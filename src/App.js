import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./screens/Main";
import SinglePage from "./screens/SinglePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
