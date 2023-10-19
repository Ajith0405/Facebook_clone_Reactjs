import React from 'react'
import './css/post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, IconButton } from '@mui/material';
function Post( {photoUrl,image,username,timestamp,message}) {
    return (
      

        <div className='row'>
        <div className='post card rounded-3 mt-2 col-12 col-lg-10 mx-auto ' >
            <div className='post_top d-flex justify-content-between p-2 '>
                <div className='post_top_left d-flex '>
                    <Avatar src={photoUrl}/>
                    <div className='postInfo mt-1 ms-2'>
                        <h4 style={{fontSize:'16px', marginBottom:'0'}}>{username}</h4>
                        <p className='d-flex' style={{fontSize:'12px'}}>{timestamp}<PublicIcon style={{fontSize:'14px'}}/> </p>
                    </div>
                </div>
                <div>
                <IconButton className=''>
                    <MoreHorizIcon/>
                </IconButton>
                <IconButton className=''>
                    <CloseIcon/>
                </IconButton>
                
                </div>
                
            </div>
            <div className='post_middle mx-auto'>
                <p className='ms-2'>{message}</p>
                {image && <img src={image} className='mx-auto' alt=''/>}
                
            </div>
            <div className='post_bottom mt-2 mb-2 d-flex justify-content-center' >
               <div className='row w-100' >
                
                <div className='post_bottomOptions col-4 col-lg-4 d-flex align-items-center px-4 rounded-3'>
                    <ThumbUpIcon /> <p className='ps-1 pt-3 '>Like</p>
                </div>
                <div className='post_bottomOptions col-4 col-lg-4 d-flex align-items-center px-4 rounded-3 '>
                    <ChatBubbleIcon /> <p className='ps-1 pt-3'>Comment</p>
                </div>
                <div className='post_bottomOptions col-4 col-lg-4 d-flex align-items-center px-4 rounded-3 '>
                    <ShareIcon /> <p className='ps-1 pt-3'>Share</p>
                </div>
                </div> 
            </div>
        </div>
        </div>
       
    )
}

export default Post