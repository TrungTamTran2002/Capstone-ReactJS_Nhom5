import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./component/Footer/Footer";

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
        <Route
          path="/login"
          element={
            <WithHeader>
              <LoginPage />
            </WithHeader>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        {/* Tạo route khi mà user nhập sai đường dẫn */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Component Layout chứa Header
const WithHeader = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Toaster />
    <Header />
    <main className="flex-grow flex flex-col">{children}</main>
    <Footer />
  </div>
);

export default App;
