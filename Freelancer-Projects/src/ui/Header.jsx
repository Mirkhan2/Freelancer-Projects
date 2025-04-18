import React from 'react'
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../Features/authentication/UserAvatar';
import useUser from '../Features/authentication/useUser';
// import useUser from '../Features/authentication/useUser'

function Header() {
 const {isLoading } =  useUser();
  //  const {data} useUser();
  return (
    <div>
            <div className="bg-secondary-0  py-4 px-8  border-b border-secondary-200">app side bar
            </div>
            <div className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
            ${!isLoading  ? "blur-sm-opacity-50" : ""}
            `}>
          <UserAvatar />
            <HeaderMenu />
          
    </div>
    </div>
  );
}

export default Header;