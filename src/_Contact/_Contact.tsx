function _Contact({
    contactRef,
}: {
    contactRef: React.RefObject<HTMLDivElement>;
}) {
    return (
        <section className="relative flex flex-row justify-center items-center py-20 min-h-screen bg-neutral-700">
            {/* About Scroll Target */}
            <div
                ref={contactRef}
                className="absolute -top-14 h-14 w-full"
            ></div>
            {/* About Content */}
            <div className="flex-1 mx-8">
                <div>Contact</div>
            </div>
        </section>
    );
}
export default _Contact;
