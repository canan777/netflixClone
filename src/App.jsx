import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detay/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
