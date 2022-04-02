import React from 'react'
import './sidebar.scss'
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className="logo">amrutadmin</span></div>
        <hr/>
        <div className='center'><ul>
            <p className='title'>MAIN</p>
           <li>
           <DashboardRoundedIcon className='icon'/>
               <span>Dashboard</span></li> 
               <p className='title'>LISTS</p>
           <li>
               <PersonRoundedIcon className='icon'/>
               <span>Users</span></li> 
           <li>
             <Inventory2RoundedIcon className='icon'/>
               <span>Products</span></li> 
           <li>
               <CreditCardRoundedIcon className='icon'/>
               <span>Orders</span></li> 
           <li>
               <LocalShippingRoundedIcon className='icon'/>
               <span>Delivery</span></li> 
               <p className='title'>USEFUL</p>
           <li>
               <AssessmentRoundedIcon className='icon'/>
               <span>Stats</span></li> 
           <li>
               <NotificationsRoundedIcon className='icon'/>
               <span>Notifications</span></li> 
               <p className='title'>SERVICE</p>
           <li>
               <SpaRoundedIcon className='icon'/>
               <span>System Health</span></li> 
           <li>
               <PsychologyRoundedIcon className='icon'/>
               <span>Logs</span></li> 
           <li>
               <SettingsApplicationsRoundedIcon className='icon'/>
               <span>Settings</span></li> 
               <p className='title'>USER</p>
           <li>
               <AccountCircleRoundedIcon className='icon'/>
               <span>Profile</span></li> 
           <li>
               <ExitToAppRoundedIcon className='icon'/>
               <span>Logout</span></li> 
               </ul></div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            
        </div>
    </div>
  )
}

export default Sidebar