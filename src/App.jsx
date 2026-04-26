import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SpeakersPage from "./pages/SpeakersPage";
import Team from "./pages/Team"

// --- LAYOUT WRAPPER ---
// This ensures Navbar and Footer are ALWAYS present
const PageLayout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Matches your loader speed
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />

              
              {/* Fallback for pages you haven't made yet */}
              <Route path="#" element={
                <div className="h-[60vh] flex items-center justify-center">
                  <h1 className="text-2xl font-bold text-gray-300 uppercase tracking-widest">
                    Coming Soon • TEDxOkumagbaAve
                  </h1>
                </div>
              } />
            </Routes>
          </PageLayout>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;