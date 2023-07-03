function _Projects({
    projectsRef,
}: {
    projectsRef: React.RefObject<HTMLDivElement>;
}) {
    return (
        <section className="relative flex flex-row justify-center items-center py-20 min-h-screen">
            {/* About Scroll Target */}
            <div
                ref={projectsRef}
                className="absolute -top-14 h-14 w-full"
            ></div>
            {/* About Content */}
            <div className="flex-1 mx-8">
                <div>Projects</div>
            </div>
        </section>
    );
}
export default _Projects;
