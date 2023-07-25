import React from 'react';
import { Sidebar, MenuItem } from 'primereact/sidebar';

function NavSideBar() {

    const navList =[
        {
            label: 'Dashboard', 
            icon: 'pi pi-fw pi-home',
            href:"/"
        },
        {
            label: 'Profiles', 
            icon: 'pi pi-fw pi-users',
            href:"/profiles"
        },
        {
            label: 'Arena', 
            icon: 'pi pi-fw pi-flag',
            href:"/arena"
        },
        {
            label: 'Trainers', 
            icon: 'pi pi-fw pi-users',
            href:"/trainers"
        }
    ]

  return (
    <Sidebar>
        
        {navList.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
     
    </Sidebar>
  )
}

export default NavSideBar