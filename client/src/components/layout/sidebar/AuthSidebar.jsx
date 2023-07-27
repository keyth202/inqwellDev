import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../themes/theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
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
      <Sidebar collapsed={isCollapsed}>
        <Menu>
      { !isCollapsed && (
        <Box mb="25px">
          <Box 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            >
              <img
                alt="profile-user"
                width = "100px"
                height ="100px"
                src={"avatar"}
                style={{
                  cursor:"pointer",
                  borderRadius:"50px"
                }} />
          </Box>
          <Box textAlign={"center"}>
            <Typography 
              variant="h2" 
              color={colors.grey[100]}
            >
              {"Name"}
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
      </Sidebar>
    </Box>
  )
}
AuthSidebar.propTypes = {
  profile: PropTypes.object
}


export default AuthSidebar