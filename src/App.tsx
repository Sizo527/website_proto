
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AgriHub from "./pages/AgriHub";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Portal from "./pages/Portal";
import Alumni from "./pages/Alumni";
import Admissions from "./pages/Admissions";

import ScrollToTop from "./components/ScrollToTop";

const NotFound = () => <div className="py-20 text-center text-4xl font-display font-bold text-red-500">404 - Not Found</div>;

export default function App() {
  return (
    <>
      {/* <ReactLenis root> */}
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/agri-hub" element={<AgriHub />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* </ReactLenis> */}
    </>
  );
}
