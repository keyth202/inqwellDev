import React from 'react';
import { Sidebar } from 'primereact/sidebar';

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
        <ul>
        {navList.map((item) => (
          <li key={item.label} {...item} />
        ))}
        </ul>
    </Sidebar>
  )
}

export default NavSideBar