import React from 'react'
import "./css/rightSidebar.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
function RightSidebar() {
    return (
        <div className='widget mt-4 pt-3 ps-2 pe-2' style={{position:'sticky',top:'0'}}>
            <div className='widget_header d-flex justify-content-between'>
                <div className='widget_headerLeft'>
                    <h5>Your Pages</h5>
                </div>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
                
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOptions ps-2 rounded-3 d-flex'>
                    <Avatar src='https://content.wepik.com/statics/25797219/preview-page0.jpg' />
                    <h6 className='ms-2 mt-2'>Mechcoder</h6>
                </div>

                <div className='widget_bodyOptions ps-2 rounded-3 mt-3 d-flex align-items-center'>
                    <NotificationsNoneIcon />
                    <p className='ms-2 mt-3'>1 Notifications</p>
                </div>

                <div className='widget_bodyOptions ps-2 rounded-3 d-flex align-items-center'>
                    <VolumeUpIcon />
                    <p className='ms-2 mt-3'>Create Promotions</p>
                </div>
            </div>
            <hr></hr>

            <div className='widget_header d-flex justify-content-between'>

                <div className='widget_headerLeft'>
                    <h5 className='mt-1'>Contacts</h5>
                </div>
                <div className='widget_headerRight'>
                    <IconButton>
                    <VideocamIcon />
                    </IconButton>
                    

                </div>
                <div className='widget_headerRight'>
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                    

                </div>
                <div className='widget_headerRight'>
                    <IconButton>
                    <MoreHorizIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className='widget_body'>
                <div className='widget_bodyOptions ps-2 rounded-3 d-flex mb-2 align-items-center'>
                    <Avatar src='https://content.wepik.com/statics/25797219/preview-page0.jpg' />
                    <h6 className='ms-2'>Mechcoder</h6>
                </div>

                <div className='widget_bodyOptions ps-2 rounded-3 d-flex mb-2 align-items-center'>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LYGuvXKx36XSqprGLRoZV-crFkIaI9iFfw&usqp=CAU' />
                    <h6 className='ms-2'>Arun</h6>
                </div>

                <div className='widget_bodyOptions ps-2 rounded-3 d-flex mb-2 align-items-center'>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpyqXgv_tFUmlF-tMIc9SU-AcNvrh128QDw&usqp=CAU' />
                    <h6 className='ms-2'>Abi</h6>
                </div>

                <div className='widget_bodyOptions ps-2 rounded-3 d-flex mb-2 align-items-center'>
                    <Avatar src='https://i.pinimg.com/236x/cb/e5/35/cbe53521184aa197780af0e1a2e53cee.jpg' />
                    <h6 className='ms-2'>Madhan</h6>
                </div>
                <div className='widget_bodyOptions ps-2 rounded-3 d-flex mb-2 align-items-center'>
                    <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bJ_Xqyfhft0JeueI1asRT6voci2BjFXggXFACMh06fEYwasi8xPxrLmsSlGHHo8kqpc&usqp=CAU' />
                    <h6 className='ms-2'>Bhavna</h6>
                </div>
            </div>



        </div>
    )
}

export default RightSidebar