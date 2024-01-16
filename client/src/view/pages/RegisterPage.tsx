import {useState} from "react";

export const RegisterPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev: any) {
        ev.preventDefault();
        await fetch('http://localhost:4000/register', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type':'application/json'},
        })
    }

    return (
        <form onSubmit={register} className="max-w-[500px] flex flex-col mx-auto items-center gap-5 mt-24 max-sm:mx-10">
            <h1 className="text-center text-5xl font-bold font-sans mb-8">Register</h1>

            <input
                type="text" placeholder="username"
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />

            <input
                type="password" placeholder="password"
                className="p-3 border-2 border-gray-300 bg-gray-100 rounded-xl m-2 w-full"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />

            <button
                className="w-64 bg-black text-white rounded-xl p-2 mt-4"
            >
                Register
            </button>
        </form>
    );
};
