import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/styles';
import { 
  Box, 
  IconButton, 
  Typography, 
  useTheme, 
  Drawer, 
  List, 
  Stack, 
  Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../themes/theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import showcase from '../../../img/showcase2.jpg';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.tealAccent[100],
        fontSize: 16
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};
const sizeConfigs = {
  sidebar: {
    width: "300px"
  }
};
const AuthSidebar = (/*{
  profile: {
    user: { name, avatar }
  }
}*/) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected]= useState("Dashboard");

  //sx in box is overriding default styles from react-prop-sidebar
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner":{
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item":{
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active":{
          color: "#6870fa !important"
        }
      }}
    >
      {/*Menu Items */}
      <Drawer
      variant='permanent'
      collapsed={isCollapsed}
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
        }}}
        >
      {/*<Sidebar collapsed={isCollapsed}>*/}
        <Menu iconShape="square">
          {/* Logo and Menu 3 lines */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[900],
            }}
            >
             {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[900]}>
                  Zoe's Arena
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )} 
            </MenuItem>
      { !isCollapsed && (
        <Box mb="25px">
          <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            >
              <img
                alt="profile-user"
                width = "50px"
                height ="100px"
                src={showcase}
                style={{
                  cursor:"pointer",
                  borderRadius:"50%"
                }} />
          </Box>
          <Box textAlign={"center"}>
            <Typography 
              variant="h2" 
              color={colors.grey[100]}
            >
              {"Name"}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
                  {"Athlete"}
              </Typography>
          </Box>
        </Box>
      )}
      <Box paddingLeft={isCollapsed ? undefined : "10%"}>
      <Item
              title="Dashboard"
              to="dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Athletes"
              to="profiles"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Posts"
              to="posts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Workouts"
              to="workouts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
        </Box>
        </Menu>
      {/*</Sidebar>*/}
      </Drawer>
    </Box>
  )
}

const AuthSideBar2 = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          //backgroundColor: colorConfigs.sidebar.bg,
          //color: colorConfigs.sidebar.color
      }}}
      >

    </Drawer>
  )
}

AuthSidebar.propTypes = {
  profile: PropTypes.object
}


export default AuthSidebar