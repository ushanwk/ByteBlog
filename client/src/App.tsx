import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar";
import Post from "./view/components/Post";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route index element={
              <main className="w-full">
                  <NavBar/>
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <Post/>
                      <Post/>
                      <Post/>
                  </section>
              </main>
          }/>

          <Route path={'/login'} element={
              <main className="w-full">
                  <NavBar/>
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <div>Login Page</div>
                  </section>
              </main>
          }/>
      </Routes>
  );
}

export default App;
