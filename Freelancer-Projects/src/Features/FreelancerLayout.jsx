import React from 'react'

function FreelancerLayout() {
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
     <CustomNavLink  to="proposals">
 <HiCollection />
 <span>darkhastha</span>
     </CustomNavLink>
     </SideBar> 
    </AppLayout>
  )
}

export default FreelancerLayout