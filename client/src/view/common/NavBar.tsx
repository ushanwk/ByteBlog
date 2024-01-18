import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const NavBar = () => {

    const [username, setUsername] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response =>{
            response.json().then(userInfo => {
                setUsername(userInfo.username)
            });
        });
    }, []);

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });

        setUsername(null);
    }

    return (
        <header className="shadow-xl">
            <div className="max-w-6xl h-16 mx-auto flex items-center justify-between px-10">
                <Link to="/" className="font-sans font-bold text-2xl">ByteBlog.</Link>
                <nav className="flex gap-5">
                    {
                        username && (
                            <>
                                <Link to='/create'>New Post</Link>
                                <a onClick={logout}>Logout</a>
                            </>
                        )
                    }

                    {
                        !username && (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )
                    }
                </nav>
            </div>
        </header>
    );
};
