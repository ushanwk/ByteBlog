import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const PostPage = () => {

    const {id} = useParams();

    const [postInfo, setPostInfo] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if(!postInfo){
        return (
          <>No Post</>
        );
    }


    return (
        <section className="my-8 px-8 py-8 flex mx-auto gap-6 max-lg:flex-wrap max-lg:w-[600px] max-sm:w-[500px] border-2 border-gray-100 rounded-xl">
            {
                <img
                    // @ts-ignore
                    src={`http://localhost:4000/${postInfo.cover}`}
                    className="w-full"
                />
            }
        </section>
    );
};
