import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import BookMeeting from "./Sections/BookMeeting";
import Footer from "./Sections/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Hero />
      <div className="clear-both flex flex-col md:flex-row">
        <Services />
        <About />
      </div>
      <Contact />
      <div className="font-inter text-center text-2xl dark:text-gray-200">
        OR
      </div>
      <BookMeeting />
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-50 rounded-full bg-gray-800 p-3 text-white shadow-md transition hover:bg-gray-700 dark:bg-gray-800"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export default App;
