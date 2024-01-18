import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useState} from "react";

const modules = {
    toolbar: [
        [{'header': [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    async function createNewPost(ev: any){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        ev.preventDefault();

        console.log(files)

        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
        });

        await response.json();
    }

    return (
        <form className="max-w-[700px] flex flex-col mx-auto items-center gap-5 mt-24 max-md:mx-10" onSubmit={createNewPost}>
            <h1 className="text-center text-4xl font-bold font-sans mb-8">Create a Post</h1>

            <input
                type="title" placeholder={'Title'}
                value={title}
                onChange={e => {setTitle(e.target.value)}}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="summary" placeholder={'Summary'}
                value={summary}
                onChange={e => {setSummary(e.target.value)}}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="file"
                onChange={e => {
                    // @ts-ignore
                    setFiles(e.target.files)}
                }
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <ReactQuill
                value={content}
                onChange={newValue => {setContent(newValue)}}
                modules={modules} formats={formats}
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
