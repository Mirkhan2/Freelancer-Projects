import React from 'react'
import Stats from './Stats'
import DashboardHeader from './DashboardHeader'
import Loading from '../../ui/Loading';
import useOwnerProjects from "../projects/useOwnerProjects";


function DashboardLayout() {
    const {isLoading , projects} = useOwnerProjects();

if(isLoading) return<Loading/>;
return (
    <div>
 <DashboardHeader />
 <Stats projects={projects} />
 <Stats />
</div>
 );
}

export default DashboardLayout