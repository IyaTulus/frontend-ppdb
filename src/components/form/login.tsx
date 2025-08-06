import axios from "axios";
import { useState } from "react"


const FormLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/api/login/', {
                email,
                password,
            })

            const { access_token, token_type } = response.data;

            localStorage.setItem('token', `${token_type} ${access_token}`);

            window.location.href = '/adminDashboard'
        } catch (error: any) {
            if (error.response) {
                console.log(error.response);
                setErrorMsg('Login gagal: ' + (error.response.data.message || 'Terjadi kesalahan'));
            } else if (error.request) {
                console.log(error.request);
                setErrorMsg('Tidak ada respon dari server.');
            } else {
                console.log('Error', error.message);
                setErrorMsg('Terjadi kesalahan: ' + error.message);
            }
        }
    }

    return (
        <div className="flex flex-col bg-white p-2 rounded-sm shadow-md">
            <header className="border-b-2 border-[#079702] py-3">
                <h1 className="font-bold">login</h1>
            </header>
            <main className="pt-3 mx-5 h-[20rem] w-[20rem]">
                {errorMsg && <div className="text-red-500 mb-2">{errorMsg}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#079702]"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#079702]"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-[#079702] hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </main>
        </div>
    )
}

export default FormLogin;