import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
};

const TableDataUser: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token')

            try {
                console.log('TOKEN : ' + token);

                const response = await axios.get('http://localhost/api/me', {
                    headers: {
                        Authorization: token ?? '',
                    }
                })

                setUser(response.data);

                console.log(response);
                
            } catch (error: any) {
                if (error.response) {
                    setErrorMsg('Gagal mengambil data user: ' + error.response.data.message);
                } else {
                    setErrorMsg('Tidak dapat terhubung ke server.');
                }
            } finally {
                setLoading(false)
            }
        }

        fetchUser();
    }, []);

    if (loading) return <p>Memuat data...</p>;

    return (
        <div className="flex flex-col bg-white p-2 rounded-sm shadow-md">
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            {user ? (
                <div>
                    <h1 className="text-xl font-bold">Selamat datang, {user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Memuat data...</p>
            )}
        </div>
    )
}

export default TableDataUser;