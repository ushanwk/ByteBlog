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

          <section className="max-w-5xl py-12 flex-col items-center justify-center mx-auto">

              <div className="my-10 px-10 flex justify-center items-center gap-6">
                  <img src={car} width={400}/>
                  <div>
                      <h2 className="text-2xl font-bold font-sans">Unveiling the Future: Exploring the Latest Electric
                          Car Technologies and Their Impact on Sustainable Driving.</h2>
                      <p className="text-gray-400 font-medium py-2">@John-Abraham</p>

                      <p className="pt-4 font-medium text-gray-600">Dive into the electric revolution! Explore cutting-edge technologies shaping the future of sustainable driving. From eco-friendly innovations to performance enhancements, discover the electric car's transformative journey towards a greener tomorrow.</p>
                  </div>
              </div>

          </section>

      </main>
  );
}

export default App;
