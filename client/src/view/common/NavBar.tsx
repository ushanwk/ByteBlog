import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../UserContext";

export const NavBar = () => {

    const context = useContext(UserContext)!
    const { setUserInfo, userInfo } = context;

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response =>{
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    async function logout(){
        await fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });

        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header className="shadow-xl">
            <div className="max-w-6xl h-16 mx-auto flex items-center justify-between px-10">
                <Link to="/" className="font-sans font-bold text-2xl">ByteBlog.</Link>

                {
                    username && (
                        <h3>Welcome {username}</h3>
                    )
                }

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
