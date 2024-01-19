import {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../../UserContext";

export const PostPage = () => {

    const {id} = useParams();

    const context = useContext(UserContext)!
    const { setUserInfo, userInfo } = context;

    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    console.log(postInfo)

    if(!postInfo){
        return (
          <>No Post</>
        );
    }


    return (
        <section
            className="my-8 px-8 pt-2 pb-10 mx-auto gap-6 max-lg:flex-wrap max-lg:w-[600px] max-sm:w-[500px] border-2 border-gray-200 rounded-xl">

            <h1 className="mt-8 text-4xl font-bold text-center">
                { // @ts-ignore
                    postInfo.title
                }
            </h1>

            <h1 className="text-[14px] font-medium text-center text-gray-400 mt-5">
                { // @ts-ignore
                    formatISO9075(new Date(postInfo.createdAt))
                }
            </h1>

            <h1 className="text-xl font-medium text-center mb-5">
                by @{ // @ts-ignore
                postInfo.author.username
            }
            </h1>

            {
                // @ts-ignore
                userInfo?.username == postInfo.author.username && (
                    <div className="text-center pt-3 pb-12">
                        <Link
                            to={`/edit/${
                                // @ts-ignore
                                postInfo._id
                            }`}
                            className="bg-black text-white px-4 py-2 rounded-xl">
                            Edit Post
                        </Link>
                    </div>
                )
            }

            <img
                // @ts-ignore
                src={`http://localhost:4000/${postInfo.cover}`}
                className="w-full mb-16 rounded-xl"
            />

            <h2 className="my-10 text-2xl font-bold">
                { // @ts-ignore
                    postInfo.summary
                }
            </h2>

            <div
                dangerouslySetInnerHTML={// @ts-ignore
                    {__html: postInfo.content}
                }
            />
        </section>
    );
};
