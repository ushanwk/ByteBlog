import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/common/Layout";
import {HomePage} from "./view/pages/HomePage";
import {LoginPage} from "./view/pages/LoginPage";
import {RegisterPage} from "./view/pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import {CreatePost} from "./view/pages/CreatePost";
import {PostPage} from "./view/pages/PostPage";
import {EditPost} from "./view/pages/EditPost";


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

                    <Route path={'/post/:id'} element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <PostPage/>
                        </section>
                    }/>

                    <Route path={'/edit/:id'} element={
                        <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                            <EditPost/>
                        </section>
                    }/>
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
