import { useState } from 'react';
import banner from '../assets/image/Banner.png'

const Banner: React.FC = () => {
    const [offsetY, setOffsetY] = useState<number>(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    return (
        <div className='bg-slate-100'>
            <div
                className="w-full h-[400px] relative overflow-hidden mt-16"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-red-100 transition-transform duration-100"
                    style={{
                        backgroundImage: `url("${banner}")`,
                        // backgroundImage: `url("${bannerImage}")`, IMAGE KE LOCK, LINK ACCESS DENIED
                        backgroundBlendMode: "multiply",
                        transform: `translateY(${offsetY * 0.4}px)`,
                    }}
                />
            </div>

        </div>
    )
}

export default Banner;