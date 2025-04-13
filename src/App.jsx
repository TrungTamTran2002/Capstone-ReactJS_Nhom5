import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./component/Header/Header";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./component/Footer/Footer";
import Loading from "./component/Loading/Loading";
import DetailMoiePage from "./pages/DetailMoviePage/DetailMoiePage";

function App() {
  return (
    <div>
      <Loading />
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

          <Route
            path="/login"
            element={
              <WithHeader>
                <LoginPage />
              </WithHeader>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <WithHeader>
                <DetailMoiePage />
              </WithHeader>
            }
          />
          {/* Trang không có Header */}

          <Route path="/register" element={<RegisterPage />} />
          {/* Tạo route khi mà user nhập sai đường dẫn */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Component Layout chứa Header
const WithHeader = ({ children }) => (
  <div className=" min-h-screen flex flex-col">
    <Toaster />
    <Header />
    <div className="flex-grow flex flex-col pt-16 ">{children}</div>
    <Footer />
  </div>
);

export default App;
