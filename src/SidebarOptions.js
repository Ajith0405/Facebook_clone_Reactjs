import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sidebarrow.css"
function SidebarOptions( {src,Icon,title}) {
  return (
   
    <div className='sidebarRow' style={{display:'flex',marginLeft:'15px', alignItems:'center',padding:'2px 3px',borderRadius:'10px 0px 0px 10px'}}>
       {title && <Avatar src={src}/>}
        {Icon && <Icon />} 
        <p className='pt-3 ps-2' style={{fontSize:'14px', fontWeight:'600'}}>{title}</p>
    </div>

  )
}

export default SidebarOptions