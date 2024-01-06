import React from "react";

export const NavBar = () => {
    return (
        <header className="shadow-xl">
            <div className="max-w-6xl h-16 mx-auto flex items-center justify-between px-10">
                <h1 className="font-sans font-bold text-2xl">ByteBlog.</h1>
                <nav className="flex gap-5">
                    <a href="">Login</a>
                    <a href="">Register</a>
                </nav>
            </div>
        </header>
    );
};