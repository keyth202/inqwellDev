import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import StadiumIcon from '@mui/icons-material/Stadium';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const SidebarData =[
    {
        title: 'Dashboard' ,
        icon: <HomeIcon />,
        path: 'dashboard',
        cName: "side-text"
    },
    {
        title: 'Arena' ,
        icon: <StadiumIcon />,
        path: 'arena',
        cName: "side-text"
    },
    {
        title: 'Friends' ,
        icon: <PeopleIcon />,
        path: 'profiles',
        cName: "side-text"
    },
    {
        title: 'Trainer' ,
        icon: <FitnessCenterIcon />,
        path: 'trainer',
        cName: "side-text"
    },

]
