import { skills } from "../models/tables/skills";

function _About({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
    return (
        <section className="relative flex flex-row justify-center py-20 bg-neutral-800">
            {/* About Scroll Target */}
            <div ref={aboutRef} className="absolute -top-14 h-14 w-full"></div>
            {/* About Content */}
            <div className="flex-1 mx-8 max-w-[1144px] fade-in">
                <div className="w-full md:w-3/5">
                    <h2 className="text-xl sm:text-3xl font-roboto-slab mb-6">
                        About
                    </h2>
                    <p className="text-base mb-4">
                        I'm a passionate web developer who loves to build
                        things.
                    </p>
                    <p className="text-base mb-4">
                        I graduated summa cum laude from North Carolina State
                        University with a GPA of 4.2
                    </p>
                    <p className="text-base mb-4">
                        I love everything from building user interfaces to
                        designing backend APIs to creating automation pipelines.
                        Nothing beats the satisfaction of working on something
                        to completion.
                    </p>
                    <p className="text-base mb-6">
                        I also have an interest in complex systems and graph
                        theory, which I believe can help us better understand
                        the world around us.
                    </p>
                    <p className="text-base mb-4 font-roboto-slab">
                        Check out my skills:
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
                    <div className="relative flex-1 mx-8">
                        <div
                            className="absolute -left-6 top-0 h-full w-[2px]
                            bg-gradient-to-b from-blue-600 via-pink-400 to-blue-600"
                        ></div>
                        <div className="font-bold">Languages</div>
                        <div className="grid grid-cols-2 md:grid-cols-3">
                            {skills.languages.map((language) => (
                                <div>{language}</div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex-1 mx-8">
                        <div
                            className="absolute -left-6 top-0 h-full w-[2px]
                            bg-gradient-to-b from-blue-600 via-pink-400 to-blue-600"
                        ></div>
                        <div className="font-bold">Technologies</div>
                        <div className="grid grid-cols-2 md:grid-cols-3">
                            {skills.technologies.map((tech) => (
                                <div>{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default _About;
