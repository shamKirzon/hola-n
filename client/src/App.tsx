import { Route, Routes } from "react-router-dom";
import HolaLandingPage from "./pages/HolaLandingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HolaLandingPage />} />
      </Routes>
    </>
  );
};

export default App;
