function _Start({ startRef }: { startRef: React.RefObject<HTMLDivElement> }) {
    return (
        <div
            className="relative min-h-screen flex flex-row justify-center items-center"
            ref={startRef}
        >
            {/* Triangle Gradients -- for large screens */}
            <div
                className="hidden lg:block absolute top-10 left-10 max-h-1/2 max-w-1/2 h-96 aspect-square rounded-tl-xl 
                bg-gradient-to-tr from-blue-600 via-pink-400 to-blue-600 triangle-1 fade-in"
            ></div>
            <div
                className="hidden lg:block absolute bottom-10 right-10 max-h-1/2 max-w-1/2 h-96 aspect-square rounded-br-xl
                bg-gradient-to-tr from-blue-600 via-pink-400 to-blue-600 triangle-2 fade-in"
            ></div>
            <div
                className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 rounded-lg
                w-[calc(100%-8rem)] h-[calc(100%-8rem)]
            "
            ></div>
            {/* Rectangle Gradients -- for small screens */}
            <div
                className="block lg:hidden absolute top-10 left-1/2 -translate-x-1/2 h-6 w-[calc(100%-4rem)]
                bg-gradient-to-r from-blue-600 via-pink-400 to-blue-600 fade-in"
            ></div>
            <div
                className="block lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 h-6 w-[calc(100%-4rem)]
                bg-gradient-to-r from-blue-600 via-pink-400 to-blue-600 fade-in"
            ></div>
            {/* Text Content */}
            <div className="z-10 flex flex-col mx-8 gap-2 sm:gap-4 text-center font-roboto-slab fade-in">
                <div className="text-3xl sm:text-7xl">Troy Marchesseault</div>
                <div className="text-lg sm:text-3xl">
                    Full-Stack Web Developer
                </div>
            </div>
        </div>
    );
}
export default _Start;
