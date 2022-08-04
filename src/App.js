import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./pages/Top";
import Create from "./pages/Create";
import Flat from "./pages/Flat";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/create" element={<Create />} />
        <Route path="/flat:id" element={<Flat id="222" />} />
        <Route path="/flat:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
