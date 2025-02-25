import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import AppHome from "./components/AppsHome/AppHome.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Footer />
              </>
            }
          />
          <Route path="/app" element={<AppHome />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
