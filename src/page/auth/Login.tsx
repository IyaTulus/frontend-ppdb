import FormLogin from "../../components/form/login";
import InfoCard from "../../components/info/InfoCard";
import { useState } from "react";

const Login: React.FC = () => {
    const [offsetY, setOffsetY] = useState<number>(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    return (
        <div className='bg-slate-100 py-10'>
            <div className="flex flex-col md:flex-row justify-center items-center mx-28 md:space-x-10 md:space-y-0 space-y-6 space-x-0">
                <InfoCard/>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login;