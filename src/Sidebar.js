import React, { useEffect, useState } from 'react'
import SidebarOptions from './SidebarOptions';
import { isAunthenticate} from './services/Auth';
import { UserDetailsApi } from './services/Api'
// import './css/sidebar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomePage from './HomePage';
import Home from './Home';

function Sidebar() {
  const [user, setUser] = useState({
    name: "",
    email: ""
})

useEffect(() => {
    if (isAunthenticate()) {
        UserDetailsApi().then((resp) => {
            console.log(resp);
            setUser({
                name: resp.data.users[0].displayName,
                email: resp.data.users[0].email
            })
        })
    }
}, [])
  return (
    
      <div className='sidebar mt-2 pt-3' style={{position:'sticky',top:'0'}}>
        
        <SidebarOptions   title={user.name} />
        
        <SidebarOptions src="/friends.png" title="Friends" />
        <SidebarOptions src="/memories.png" title="Memories" />
        <SidebarOptions src="/save.png" title="saved" />
        <SidebarOptions src="/group.png" title="Groups" />
        <SidebarOptions src="video.jpeg" title="Video" />
        <SidebarOptions src="/market.png" title="Marketplace"/>
        <SidebarOptions src="/most_recent.png" title="Feeds" />
        <SidebarOptions src="/events.png" title="Events" />
        <SidebarOptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png" title="Ads Manager" />
        <SidebarOptions Icon={KeyboardArrowDownIcon} title="See More" />

      
        
    </div>
    
  ) 
}

export default Sidebar