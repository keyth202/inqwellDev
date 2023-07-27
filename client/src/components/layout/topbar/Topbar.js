import React, {useContext} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import { ColorModeContext, tokens } from '../../../themes/theme';
import {InputBase} from '@mui/material';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Search from '@mui/icons-material/Search';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent={"space-between"} p={2}>
        {/*Seach Bar */}
        <Box 
            display={"flex"} 
            backgroundColor={colors.primary[400]} 
            borderRadius={"3px"}
        >
            <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
                <IconButton>
                    <Search />
                </IconButton>
        </Box>

        {/*Icons*/}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlined />
                ):(
                    <LightModeOutlined />
                )}              

            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>

        </Box>
    </Box>
  )
}

export default Topbar

