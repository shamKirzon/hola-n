import { Navigate, Route, Routes } from "react-router-dom";
import HolaLandingPage from "./pages/HolaLandingPage";

const App = () => {
  const examplePort = import.meta.env.VITE_PORT;

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/hola-n" replace />} />
        <Route path="/hola-n" element={<HolaLandingPage />} />
      </Routes>
    </>
  );
};

export default App;
