import React from 'react';
import './App.css';
import car from './assets/images/car.jpeg'

function App() {
  return (
      <main className="w-full">

           <header className="shadow-xl">
               <div className="max-w-6xl h-16 mx-auto flex items-center justify-between px-10">
                   <h1 className="font-sans font-bold text-2xl">ByteBlog.</h1>
                   <nav className="flex gap-5">
                       <a href="">Login</a>
                       <a href="">Register</a>
                   </nav>
               </div>
           </header>

          <section className="max-w-6xl mx-auto py-24 px-10">
            <div className="flex gap-6 max-md:flex-wrap items-center justify-center">
                <img src={car} className="w-[40%] max-md:w-[60%]"/>
                <div className="items-center justify-center flex flex-col gap-5">
                    <h2 className="font-sans font-bold text-3xl">Unveiling the Future: Exploring the Latest Electric Car</h2>
                    <p className="text-xl">Dive into the electric revolution! Explore cutting-edge technologies shaping the future of sustainable driving. From eco-friendly innovations to performance enhancements, discover the electric car's transformative journey towards a greener tomorrow.</p>
                </div>
            </div>
          </section>

      </main>
  );
}

export default App;
