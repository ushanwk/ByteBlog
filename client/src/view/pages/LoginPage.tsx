export const LoginPage = () => {
    return (
        <form className="max-w-[500px] flex flex-col mx-auto items-center gap-5 mt-24 max-sm:mx-10">
            <h1 className="text-center text-5xl font-bold font-sans mb-8">Login</h1>
            <input type="text" placeholder="username"
                   className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"/>
            <input type="password" placeholder="password"
                   className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"/>
            <button className="w-64 bg-black text-white rounded-xl p-2 mt-4">Login</button>
        </form>
    );
};
