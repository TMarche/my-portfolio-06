function Navigation() {
    return (
        <div
            className="z-50 fixed bottom-20  h-14 w-full sm:w-3/5
            left-1/2 -translate-x-1/2"
        >
            <nav className="h-full">
                <ul className="flex flex-row h-full justify-around items-center">
                    <li className="flex-1 text-center h-full">
                        <button className="h-full w-full bg-black bg-opacity-20 hover:bg-opacity-10 duration-300 sm:rounded-s-lg">
                            Start
                        </button>
                    </li>
                    <li className="flex-1 text-center h-full">
                        <button className="h-full w-full bg-black bg-opacity-20 hover:bg-opacity-10 duration-300">
                            About
                        </button>
                    </li>
                    <li className="flex-1 text-center h-full">
                        <button className="h-full w-full bg-black bg-opacity-20 hover:bg-opacity-10 duration-300">
                            Projects
                        </button>
                    </li>
                    <li className="flex-1 text-center h-full">
                        <button className="h-full w-full bg-black bg-opacity-20 hover:bg-opacity-10 duration-300 sm:rounded-e-lg">
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation;
