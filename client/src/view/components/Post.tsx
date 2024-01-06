import car from "../../assets/images/car.jpeg";
import React from "react";

export const Post = () => {
    return (
        <div
            className="my-8 px-8 py-8 flex mx-auto justify-center items-center gap-6 max-lg:flex-wrap max-lg:w-[600px] max-sm:w-[500px] border-2 border-gray-500">
            <img src={car} className="w-[400px] max-lg:w-[500px]"/>
            <div>
                <h2 className="text-2xl font-bold font-sans">Unveiling the Future: Exploring the Latest Electric
                    Car Technologies and Their Impact on Sustainable Driving.</h2>
                <p className="text-gray-400 font-medium py-2">@John-Abraham</p>

                <p className="pt-4 font-medium text-gray-600">Dive into the electric revolution! Explore
                    cutting-edge technologies shaping the future of sustainable driving. From eco-friendly
                    innovations to performance enhancements, discover the electric car's transformative journey
                    towards a greener tomorrow.</p>
            </div>
        </div>
    );
};