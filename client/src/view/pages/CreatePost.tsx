import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export const CreatePost = () => {
    return (
        <form className="max-w-[700px] flex flex-col mx-auto items-center gap-5 mt-24 max-md:mx-10">
            <h1 className="text-center text-4xl font-bold font-sans mb-8">Create a Post</h1>

            <input
                type="title" placeholder={'Title'}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="summary" placeholder={'Summary'}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="file" placeholder={'Summary'}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <ReactQuill
                className="border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <button
                className="w-64 bg-black text-white rounded-xl p-2 mt-4"
            >
                Create Post
            </button>
        </form>
    );
};
