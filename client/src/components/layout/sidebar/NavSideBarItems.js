import React, {useState} from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';

const NavSideBarItems = () => {
  const [visible, setVisible] = useState(true);
  const navList =[
    {
        label: 'Dashboard',
         icon: 'pi pi-fw pi-home',
         command: ()=>{

         }
        },
    {
        label: 'Arena',
        icon: 'pi pi-fw pi-flag',
        command: ()=>{

        }
    },
    {label: 'Trainers', icon: 'pi pi-fw pi-users'}
]

  return (
    <div>
        <Sidebar visible={visible} position="right" className="p-sidebar-sm" onHide={() => setVisible(false)}>

      </Sidebar>
    </div>
  )
}

export default NavSideBarItems
