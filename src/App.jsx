import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/LoginPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang có Header */}
        <Route
          path="/"
          element={
            <WithHeader>
              <HomePage />
            </WithHeader>
          }
        />

        {/* Trang không có Header */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Component Layout chứa Header
const WithHeader = ({ children }) => (
  <>
    <Toaster />
    <Header />
    {children}
  </>
);

export default App;
