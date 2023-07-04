import React from 'react';
import { Menubar } from 'primereact/menubar';

function NavSideBar() {

    const navList =[
        {label: 'Dashboard', icon: 'pi pi-fw pi-home'},
        {label: 'Arena', icon: 'pi pi-fw pi-flag'},
        {label: 'Trainers', icon: 'pi pi-fw pi-users'}
    ]

  return (
    <div>
        <header>
            <ul>
                <Menubar
                    model={navList} />

            </ul>
        </header>
    </div>
  )
}

export default NavSideBar