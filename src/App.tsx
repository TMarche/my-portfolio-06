import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Start from "./_Start/_Start";
import About from "./_About/_About";
import Contact from "./_Contact/_Contact";
import Projects from "./_Projects/_Projects";
import { useEffect, useState } from "react";

function App() {
    const [scrollTop, setScrollTop] = useState(window.scrollY);

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="bg-neutral-900 text-white font-roboto"
            onScroll={handleScroll}
        >
            <Navigation scrollTop={scrollTop} />
            <Start />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
