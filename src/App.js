import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index path="" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
