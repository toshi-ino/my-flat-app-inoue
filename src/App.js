import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./pages/Top";
import Create from "./pages/Create";
import Flat from "./pages/Flat";
import Edit from "./pages/Edit";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/create" element={<Create />} />
          <Route path="/flat:id" element={<Flat id="222" />} />
          <Route path="/flat:id/edit" element={<Edit />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
