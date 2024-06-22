import * as React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 h-full w-64 fixed">
            <div className="flex flex-col items-start p-4 space-y-4">
                <div className="text-white text-lg font-bold mb-8">Portfolio</div>
                <a href="#" className="text-white hover:text-gray-200">Home</a>
                <a href="#" className="text-white hover:text-gray-200">About</a>
                <a href="#" className="text-white hover:text-gray-200">Blabla</a>
                <a href="#" className="text-white hover:text-gray-200">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;