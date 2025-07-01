import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import BookMeeting from "./Sections/BookMeeting";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col md:flex-row">
        <Services />
        <About />
      </div>
      <Contact />
      <div className="font-inter text-center text-2xl dark:text-gray-200">
        OR
      </div>
      <BookMeeting />
      <Footer />
    </>
  );
}

export default App;
