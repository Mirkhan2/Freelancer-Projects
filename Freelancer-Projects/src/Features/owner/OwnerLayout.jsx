import React from 'react'
import AppLayout from '../../ui/AppLayout'
import SideBar from '../../ui/SideBar'
import { CustomNavLink } from '../../utils/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'

function OwnerLayout() {
  return (
   <AppLayout>
   <SideBar>
    <CustomNavLink  to="dashboard">
<HiHome />
<span>dashboard</span>
    </CustomNavLink>
    <CustomNavLink  to="projects">
<HiCollection />
<span>projects</span>
    </CustomNavLink>
    </SideBar> 
   </AppLayout>
  );
}

export default OwnerLayout;