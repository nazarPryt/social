import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SearchIcon from '@mui/icons-material/Search';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import {Link} from "react-router-dom";
import profilePhoto from '../../pages/register/register-bg.jpg'
const NavBar = () => {
    return (
        <div>
            <div className='left'>
                <Link to='/home'  className='logo'>
                    <span>My Social</span>
                </Link>
                <CottageIcon/>
                <DarkModeOutlinedIcon/>
                <WidgetsIcon/>
                <SearchIcon/>
                <input type="text" placeholder={'Search...'}/>
            </div>
            <div className='right'>
                <Person2OutlinedIcon/>
                <MailOutlineRoundedIcon/>
                <NotificationsActiveOutlinedIcon/>
                {/*<img src={profilePhoto} alt="profile photo"/>*/}
                <span>Nazar Prytuliak</span>
            </div>
        </div>
    );
};

export default NavBar;