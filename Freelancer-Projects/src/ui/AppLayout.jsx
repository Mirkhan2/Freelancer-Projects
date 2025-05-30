import React from 'react'
import {Outlet} from "react-router-dom";
import Header from './Header';

function AppLayout({children}) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr">
    <Header />
    {/* <SideBar /> */}
{children}
    <div className="bg-secondary-100 p-8 overflow-y-auto  ">
        <div className="mx-auto max-w-screen-lg bg-red-300 flexflex-col gap-y-12">
        <Outlet />
        </div>
        </div>
        </div>
  );
}

export default AppLayout; 