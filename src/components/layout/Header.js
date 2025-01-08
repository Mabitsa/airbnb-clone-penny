import React from 'react';
import {useDispatch} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { openModal } from "../../actions/modalAction";
import Login from "../Login";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch()

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />))
  };
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
            <span onClick={openModalHandle}>Log in</span>
            <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Header