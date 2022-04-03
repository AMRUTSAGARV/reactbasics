import React from 'react'
import './navbar.scss'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className="search">
        <input type="text" placeholder='Search...' />
        <SearchRoundedIcon/>
      </div>
      <div className="items">
        <div className="item">
          <LanguageRoundedIcon
          className='icon'/>English
        </div>
        <div className="item">
          <DarkModeRoundedIcon className='icon'/>
        </div>
        <div className="item">
          <FullscreenExitRoundedIcon className='icon'/>
        </div>
        <div className="item">
          <NotificationsNoneRoundedIcon className='icon'/>
          <div className='counter'>1</div>
        </div>
        <div className="item">
        <div className='counter'>2</div>
          <ChatBubbleOutlineRoundedIcon  className='icon'/>
        </div>
        <div className="item">
          <ViewListRoundedIcon className='icon'/>
        </div>
        <div className='item'>
          <img 
          src='https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg' 
          alt='' 
          className='avatar'
          />
        </div>
       
      </div>
      </div>
      </div>
  )
}

export default Navbar