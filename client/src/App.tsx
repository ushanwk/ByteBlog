import React from 'react';
import './App.css';
import {NavBar} from "./view/common/NavBar";
import Post from "./view/components/Post";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/common/Layout";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <Post/>
                      <Post/>
                      <Post/>
                  </section>
              }/>

              <Route path={'/login'} element={
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <div>Login Page</div>
                  </section>
              }/>
          </Route>
      </Routes>
  );
}

export default App;
