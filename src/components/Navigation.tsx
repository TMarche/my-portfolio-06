import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navPositionVariant = {
    visible: { y: 0, transition: { duration: 0.2 } },
    hidden: { y: -56, transition: { duration: 0.2 } },
};

function Navigation({
    executeScroll,
    scrollTop,
    startRef,
    aboutRef,
    projectsRef,
    contactRef,
}: {
    executeScroll: (scrollToRef: React.RefObject<HTMLDivElement>) => void;
    scrollTop: number;
    startRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}) {
    const [isAnimating, setIsAnimating] = useState(false);
    const control = useAnimation();

    useEffect(() => {
        if (scrollTop > 56) {
            if (isAnimating) return;
            setIsAnimating(true);
            control.start("visible").then(() => setIsAnimating(false));
        } else {
            if (isAnimating) return;
            setIsAnimating(true);
            control.start("hidden").then(() => setIsAnimating(false));
        }
    }, [control, scrollTop, isAnimating]);

    return (
        <motion.div
            initial="hidden"
            variants={navPositionVariant}
            animate={control}
            className={`z-50 flex flex-row justify-between fixed top-0 h-14 w-full bg-black bg-opacity-20 px-8 items-center duration-300 backdrop-blur`}
        >
            <div>troymarchesseault.dev</div>
            <nav className="h-full">
                <div className="sm:hidden relative flex flex-row h-full items-center">
                    <div
                        className="absolute h-[calc(100%-1rem)] aspect-square rounded-full bg-white
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-0 cursor-pointer
                        hover:bg-opacity-30 duration-300"
                    ></div>
                    <MenuIcon />
                </div>
                <ul className="hidden sm:flex flex-row h-full">
                    <li className="h-full">
                        <button
                            className="px-4 h-full bg-black bg-opacity-0
                            hover:bg-opacity-30 duration-300"
                            onClick={() => executeScroll(startRef)}
                        >
                            Start
                        </button>
                    </li>
                    <li className="h-full">
                        <button
                            className="px-4 h-full bg-black bg-opacity-0
                            hover:bg-opacity-30 duration-300"
                            onClick={() => executeScroll(aboutRef)}
                        >
                            About
                        </button>
                    </li>
                    <li className="h-full">
                        <button
                            className="px-4 h-full bg-black bg-opacity-0
                            hover:bg-opacity-30 duration-300"
                            onClick={() => executeScroll(projectsRef)}
                        >
                            Projects
                        </button>
                    </li>
                    <li className="h-full">
                        <button
                            className="px-4 h-full bg-black bg-opacity-0
                            hover:bg-opacity-30 duration-300"
                            onClick={() => executeScroll(contactRef)}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
}
export default Navigation;
