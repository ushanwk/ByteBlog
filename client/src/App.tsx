import React from 'react';
import './App.css';
import car from './assets/images/car.jpeg'
import {NavBar} from "./view/common/NavBar";
import {Post} from "./view/components/Post";

function App() {
  return (
      <main className="w-full">

          <NavBar/>

          <section className="max-w-5xl my-12 flex-col items-center justify-center mx-auto">
            <Post/>
          </section>

      </main>
  );
}

export default App;
