import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import Header from "./component/Header/Header";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/AuthPages/RegisterPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./component/Footer/Footer";
import Loading from "./component/Loading/Loading";
import DetailMoviePage from "./pages/DetailMoviePage/DetailMoviePage";

function App() {
  // Đọc từ localStorage mỗi khi render component
  const isAuth = localStorage.getItem("user") !== null;

  return (
    <div className="min-h-screen flex flex-col">
      <Loading />
      <BrowserRouter>
        <Routes>
          {/* Trang chủ - cần đăng nhập */}
          <Route
            path="/"
            element={
              isAuth ? (
                <WithHeader>
                  <HomePage />
                </WithHeader>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Chi tiết phim - cần đăng nhập */}
          <Route
            path="/detail/:id"
            element={
              isAuth ? (
                <WithHeader>
                  <DetailMoviePage />
                </WithHeader>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Các trang công khai - không có header/footer */}
          <Route
            path="/login"
            element={!isAuth ? <LoginPage /> : <Navigate to="/" replace />}
          />

          <Route
            path="/register"
            element={!isAuth ? <RegisterPage /> : <Navigate to="/" replace />}
          />

          {/* Route lỗi 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

// Component Layout chứa Header
const WithHeader = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow flex flex-col pt-16">{children}</div>
    <Footer />
  </div>
);

export default App;
