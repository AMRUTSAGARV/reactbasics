import React from 'react'
import './featured.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { CircularProgressBar } from "react-circular-progressbar"

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVertRoundedIcon fontSize='small'/>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Featured