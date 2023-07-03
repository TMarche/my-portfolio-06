import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Start from "./_Start/_Start";
import About from "./_About/_About";
import Contact from "./_Contact/_Contact";
import Projects from "./_Projects/_Projects";
import { useEffect, useRef, useState } from "react";

function App() {
    const [scrollTop, setScrollTop] = useState(window.scrollY);

    const executeScroll = (scrollToRef: React.RefObject<HTMLDivElement>) => {
        if (scrollToRef.current === null) return;
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Navigation refs
    const startRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="bg-neutral-900 text-neutral-200 font-roboto"
            onScroll={handleScroll}
        >
            <Navigation
                executeScroll={executeScroll}
                scrollTop={scrollTop}
                startRef={startRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
            />
            <Start startRef={startRef} />
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
            <Footer />
        </div>
    );
}

export default App;
