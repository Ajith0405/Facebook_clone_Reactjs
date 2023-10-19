import React, { useEffect, useState } from 'react'
import './css/storyreel.css'
import { Avatar } from '@mui/material'
import { isAunthenticate} from './services/Auth';
import { UserDetailsApi } from './services/Api'
function Storyreel() {
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
    <div className='d-none d-md-block '>
    <div className='storyReel mt-4'>
        <div className='story'style={{backgroundImage:`url('https://img.freepik.com/premium-photo/abstract-black-textured-background-with-scratches_130265-12474.jpg')`}} >
            <Avatar/>
            <h4>{user.name}</h4>
        </div>

        <div className='story'style={{backgroundImage:`url('https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80`}} >
            <Avatar src="https://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg"/>
            <h4>Arun</h4>
        </div>

        <div className='story'style={{backgroundImage:`url('https://images.unsplash.com/photo-1631943406801-ba6ccfa4f682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`}} >
            <Avatar src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg"/>
            <h4>Praveen</h4>
        </div>
        
        <div className='story'style={{backgroundImage:`url('https://images.unsplash.com/photo-1613828330596-982c62f72e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')`}} >
            <Avatar src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"/>
            <h4>Kirsh</h4>
        </div>

        <div className='story'style={{backgroundImage:`url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80')`}} >
            <Avatar src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'/>
            <h4>Bharath</h4>
        </div>
        


    </div>
    </div>
  )
}

export default Storyreel