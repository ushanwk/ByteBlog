import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/common/Layout";
import {HomePage} from "./view/pages/HomePage";
import {LoginPage} from "./view/pages/LoginPage";
import {RegisterPage} from "./view/pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import {CreatePost} from "./view/pages/CreatePost";


function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <HomePage/>
                        </section>
                    }/>

                    <Route path={'/login'} element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <LoginPage/>
                        </section>
                    }/>

                    <Route path={'/register'} element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <RegisterPage/>
                        </section>
                    }/>

                    <Route path={'/create'} element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <CreatePost/>
                        </section>
                    }/>
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
