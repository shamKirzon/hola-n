import { Route, Routes } from "react-router-dom";
import HolaLandingPage from "./pages/HolaLandingPage";
import FullCollectionPage from "./pages/FullCollectionPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HolaLandingPage />} />
        <Route path="/collection" element={<FullCollectionPage />} />
      </Routes>
    </>
  );
};

export default App;
