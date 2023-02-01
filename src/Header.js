import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>

            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img className="header__logo" src="https://cdn-icons-png.flaticon.com/128/732/732251.png" alt="Tinder_logo" />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header
