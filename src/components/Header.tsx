import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { name: 'Pendaftaran', path: '/pendaftaran' },
    { name: 'Jurusan', path: '/jurusan' },
    { name: 'Pengumuman', path: '/pengumuman' },
    { name: 'Daftar', path: '/daftar' },
    { name: 'Login', path: '/login' },
];

const Header: React.FC = () => {
    const location = useLocation();
    const renderMenu = () => menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
            <Link
                key={item.path}
                to={item.path}
                className={classNames(
                    'flex h-full text-slate-700 bg-blue-700 md:justify-center md:items-center rounded-sm md:bg-transparent border-b-2 mb-[0.3px]', {
                    'border-transparent': !isActive,
                    'border-slate-700': isActive
                })}>
                {item.name}
            </Link>
        )
    });

    return (
        <NavigationMenu className="bg-white fixed top-0 z-50 w-full border-gray-200 flex justify-center items-center">
            <NavigationMenuList className="flex flex-wrap items-center md:space-x-[25rem] space-x-52 w-full justify-between h-16">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-700">PPDB Sekolah</span>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <NavigationMenuItem className="hidden w-full md:w-auto md:h-full md:flex md:justify-center md:items-center" id="navbar-default">
                    <ul className="font-medium flex flex-col p-0 md:flex-row md:h-full md:justify-center md:items-center md:space-x-12">
                        {renderMenu()}
                    </ul>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Header;