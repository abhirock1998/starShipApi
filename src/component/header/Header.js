import React,{useState} from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
function Header() {
    const [search,setSearch]=useState(false)
    return (
        <div className='header'>
            <div className='header__left'>
               <Link to="/"> <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png" alt=""/></Link>
            </div>
            <div className='header__right'>
                <form className='header__rightForm'>
                   {search&& <input style={{width:`${search&&'200px'}`}} type="text" placeholder='Search person,starship,planet'/>}
                    <button type="submit" className='header__rightFormBtn' >Submit</button>
                   
                </form>
                <IconButton onClick={() => setSearch(!search)} ><SearchIcon/></IconButton>
            </div>
        </div>
    )
}

export default Header
