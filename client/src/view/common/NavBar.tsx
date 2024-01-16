import React from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <header className="shadow-xl">
            <div className="max-w-6xl h-16 mx-auto flex items-center justify-between px-10">
                <Link to="/" className="font-sans font-bold text-2xl">ByteBlog.</Link>
                <nav className="flex gap-5">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </header>
    );
};