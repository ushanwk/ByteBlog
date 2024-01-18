import car from "../../assets/images/car.jpeg";
import React from "react";
import { format } from "date-fns";

interface PostProps{
    title: string,
    summary: string,
    file: string,
    content: string,
    createdAt: string
}

export default  function Post(props: PostProps) {
    return (
        <div
            className="my-8 px-8 py-8 flex mx-auto gap-6 max-lg:flex-wrap max-lg:w-[600px] max-sm:w-[500px] border-2 border-gray-100 rounded-xl">
            <img src={car} className="w-[400px] max-lg:w-[500px]"/>
            <div>
                <h2 className="text-2xl font-bold font-sans">{props.title}</h2>

                <div className="flex gap-5">
                    <p className="text-gray-500 font-medium py-2">@John-Abraham</p>
                    <p className="text-gray-300 font-medium py-2">{format(new Date(props.createdAt), 'MMM d, yyyy | HH:mm')}</p>
                </div>

                <p className="pt-4 font-medium text-gray-600">{props.summary}</p>
            </div>
        </div>
    );
};
