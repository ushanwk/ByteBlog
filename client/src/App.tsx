import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/common/Layout";
import {HomePage} from "./view/pages/HomePage";
import {LoginPage} from "./view/pages/LoginPage";
import {RegisterPage} from "./view/pages/RegisterPage";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <HomePage />
                  </section>
              }/>

              <Route path={'/login'} element={
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <LoginPage />
                  </section>
              }/>

              <Route path={'/register'} element={
                  <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
                      <RegisterPage />
                  </section>
              }/>
          </Route>
      </Routes>
  );
}

export default App;
