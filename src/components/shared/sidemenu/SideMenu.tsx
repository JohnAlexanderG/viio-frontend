import type { IconType } from 'react-icons';
import { IoAccessibilityOutline, IoFastFood, IoLogOutOutline, IoSpeedometerOutline } from 'react-icons/io5';
import { useAuthStore } from '../../../stores';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';


interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: IconType;
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', subTitle: 'Visualizar data', href: '/dashboard', Icon: IoSpeedometerOutline },
  { title: 'Productos', subTitle: 'Products', href: '/dashboard/bears', Icon: IoFastFood },
  { title: 'Cuenta', subTitle: 'Info account', href: '/dashboard/person', Icon: IoAccessibilityOutline },
];




export const SideMenu = () => {

  const userName = useAuthStore(state => `${state.user?.firstName} ${state.user?.lastName}`)
  const logoutUser = useAuthStore(state => state.logoutUser)

  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-white">
          VIIO
          <span className="text-blue-500 text-xs"> Front office</span>
        </h1>
      </div>

      {/*  Profile */}
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img className="rounded-full w-8 h-8" src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="" />
          </span>
          <span className="text-sm md:text-base font-bold">
            {userName}
          </span>
        </a>
      </div>

      {/* Menu Items */}
      <nav id="nav" className="w-full px-6">

        {
          menuItems.map(item => (
            <SideMenuItem key={item.href} {...item} />
          ))
        }



        {/* Logout */}
        <a onClick={() => logoutUser()} className="mt-10">
          <div>
            <IoLogOutOutline />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Logout</span>
            <span className="text-sm text-slate-500 hidden md:block">Cerrar sesión</span>
          </div>
        </a>

      </nav>
    </div>
  );
};