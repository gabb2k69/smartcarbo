import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página inicial */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Cadastro */}
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;