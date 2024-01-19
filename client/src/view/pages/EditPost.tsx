import ReactQuill from "react-quill";
import React, {FormEvent, useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";

interface PostInfo {
    title: string;
    summary: string;
    content: string;
}

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

export const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState<string>('');
    const [summary, setSummary] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [files, setFiles] = useState<FileList | null>(null);
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => response.json())
            .then((postInfo: PostInfo) => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            });
    }, [id]);

    async function updatePost(ev: FormEvent): Promise<void> {
        ev.preventDefault();

        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id || '');

        if (files?.[0]) {
            data.set('file', files[0]);
        }

        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={`/post/${id}`} />;
    }

    return (


        <form className="max-w-[700px] flex flex-col mx-auto items-center gap-5 mt-24 max-md:mx-10"
              onSubmit={updatePost}>
            <h1 className="text-center text-4xl font-bold font-sans mb-8">Update Post</h1>

            <input
                type="title" placeholder={'Title'}
                value={title}
                onChange={e => {
                    setTitle(e.target.value)
                }}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="summary" placeholder={'Summary'}
                value={summary}
                onChange={e => {
                    setSummary(e.target.value)
                }}
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <input
                type="file"
                onChange={e => {
                    // @ts-ignore
                    setFiles(e.target.files)
                }
                }
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <ReactQuill
                value={content}
                onChange={newValue => {
                    setContent(newValue)
                }}
                modules={modules} formats={formats}
                className="border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
            />

            <button
                className="w-64 bg-black text-white rounded-xl p-2 mt-4"
            >
                Update Post
            </button>
        </form>

    );
};
