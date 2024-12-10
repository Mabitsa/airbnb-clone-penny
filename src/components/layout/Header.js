import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPgPCQ5o_XNfriYRAbp1UKCW8opXlkJZNqQ&s' 
            className='header_logo'
            alt='logo'
        />
        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>
        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Header