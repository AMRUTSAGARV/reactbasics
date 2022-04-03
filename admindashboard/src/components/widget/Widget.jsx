import React from 'react'
import './widget.scss';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';


const Widget = ({ type }) => {

let data;


switch(type){
    case "user":
        data={
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon: 
               <PersonOutlineRoundedIcon className='icon'/>,
            
        };
        break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link:"View all orders",
                icon: 
                   <ShoppingCartCheckoutRoundedIcon className='icon'/>,
                
            };
            break;
            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney: true,
                    link:"View net earnings",
                    icon: 
                       <MonetizationOnRoundedIcon className='icon'/>,
                    
                };
                break;
                case "balance":
                    data={
                        title:"BALANCE",
                        isMoney: true,
                        link:"See all users",
                        icon: 
                           <PersonOutlineRoundedIcon className='icon'/>,
                        
                    };
                    break;
        default:
            break;
}


  return (
    <div className='widget'>
        <div className='left'>
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">See all user</span>
        </div>
        <div className='right'>
<div className="percentage positive"><KeyboardArrowUpRoundedIcon/>
20%
</div>
<PersonOutlineRoundedIcon className='icon'/>

        </div>
    </div>
  )
}

export default Widget