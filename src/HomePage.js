import React from 'react'
import Navbar from './Navbar'
import { Avatar } from '@mui/material'
import './css/sidebarrow.css'
import SidebarOptions from './SidebarOptions'

function HomePage({ src, Icon, title }) {
    return (
        <div>
            <Navbar />
            <div className='row' style={{ marginTop: '68px' }}>
                <div className='col-3' style={{ border: '1px solid red' }}>
                    
                </div>
                <div className='col-6' style={{ border: '1px solid red' }}>

                </div>
                <div className='col-3' style={{ border: '1px solid red' }}>

                </div>
            </div>
        </div>
    )
}

export default HomePage