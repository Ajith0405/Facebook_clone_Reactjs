import { IconButton } from '@mui/material'
import React from 'react'
import './css/groups.css'
import SettingsIcon from '@mui/icons-material/Settings';
import Navbar from './Navbar';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExploreIcon from '@mui/icons-material/Explore';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar } from '@mui/material';



function Groups() {


    return (
        <div>
            <Navbar />
            <div className='row' style={{ marginTop: '65px' }}>
                <div className='col-3 col-lg-3 vh-100 d-none d-sm-block' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: '#ffff' }}>
                    <div className='d-flex justify-content-between mt-2'>
                        <h3 className='ms-2' >Groups</h3>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                    </div>
                    <div className='header_search py-1 rounded-5 ms-2 mb-2' style={{ backgroundColor: '#F5F7F8' }}>
                        <form class="d-flex align-items-center justify-content-center">
                            <SearchIcon className='ps-1' />
                            <input class="form-control me-2" type="text" placeholder="Search" style={{ backgroundColor: '#F5F7F8', outline: 'none', border: 'none' }} />
                        </form>
                    </div>
                    <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-1 justify-content-between'>
                        <div className='d-flex'>
                            <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }} >
                                <FeedIcon fontSize='23px' />
                            </IconButton>
                            <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Your feed</h6>
                        </div>
                        <IconButton>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </div>
                    <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-1 justify-content-between'>
                        <div className='d-flex'>
                            <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }} >
                                <ExploreIcon fontSize='23px' />
                            </IconButton>
                            <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Discover</h6>
                        </div>
                        <IconButton>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </div>
                    <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-1 justify-content-between'>
                        <div className='d-flex'>
                            <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }} >
                                <Diversity3Icon fontSize='23px' />
                            </IconButton>
                            <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Your groups</h6>
                        </div>
                        <IconButton>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </div>
                    <div className='rounded-3 ms-2 mt-2' style={{ backgroundColor: '#dddd', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <h5 className='mx-auto pt-2' style={{ color: 'blue' }}> + Create New Group</h5>
                    </div>
                    <hr className='ms-2' />
                    <div className='d-flex justify-content-around'>
                        <h6 >Groups you've joined</h6>
                        <a href='#' style={{ textDecoration: 'none' }}>See all</a>
                    </div>
                    <div className='d-flex ms-2 mt-2 px-1 option_buttons rounded-3' style={{ cursor: 'pointer' }} >
                        <img className='rounded-3' width={'60px'} height={'45px'} src='https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/336318134_9721723557853246_8596823047903395155_n.png?stp=dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AzagqvA6Z-0AX8bCOJ1&_nc_ht=scontent-maa2-2.xx&oh=00_AfDQzgLWvPV127U8acXRgsoK6qRHBabXJG64nq1dEUxxBw&oe=65342B5E' />
                        <div className='d-flex flex-column align-items-start mx-auto'>
                            <p className='ms-1' style={{ fontSize: '15px', padding: '0', margin: '0' }}>Facebook Ads and Google Ads Expert</p>
                            <p className='ms-1' style={{ fontSize: '10px', padding: '0', margin: '0' }}>Last Active 42 minutes ago</p>
                        </div>

                    </div>

                </div>
                <div className='col-12 col-sm-12 col-md-12 mt-2 col-lg-9 vh-100' style={{ overflow:'scroll'}} >
                    <div className='container row'>
                        <div className='col-12 col-lg-12 col-md-12 col-sm-12'>
                            <h6 style={{ color: 'gray' }}>Recent activity</h6>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mx-auto col-12 col-xs-12 col-sm-12 col-md-12 col-lg-9' >
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="card card_group">
                                            <div className='img-wrapper' >
                                                <img src="https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/383428625_670645028544966_6732994895593228112_n.png?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-ZzF_JgyBOcAX_6rGBo&_nc_ht=scontent.ftir5-1.fna&oh=00_AfBahx90StwDsV7wWa8OFeh1H__potu-Bshlm0_MClxE0A&oe=65369DD7" alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Facebooks Ads and Google Ads </h5>
                                                <p class="card-text" style={{ color: 'gray' }}>234K Members 10+ Post a day</p>
                                                <a href="#" class="btn btn-primary w-100">Join Group</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="carousel-item">
                                        <div class="card card_group">
                                            <div className='img-wrapper'>
                                                <img src="https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/366706528_1481339932696628_7440808749251323353_n.png?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PKWxSIOsCH8AX_XHceg&_nc_ht=scontent.ftir5-1.fna&oh=00_AfC0iFDLDP65Z97ZizBJlv5J6UsI3Ixug1ufdsNDf56O_A&oe=65352AEB" alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Shopify & Amazon Dropshipping Support , Help , Services</h5>
                                                <p class="card-text" style={{ color: 'gray' }} >134K Members 7+ Post a day</p>
                                                <a href="#" class="btn btn-primary w-100">Join Group</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card card_group">
                                            <div className='img-wrapper'>
                                                <img src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/308688802_3211799942408066_3129200566458708040_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B0lH9JdNJY4AX9nwR3X&_nc_ht=scontent-maa2-2.xx&oh=00_AfCVMRC57Mwnl4i76PPmMPx4r9BgHlW7XRdQ1oo0l5i_vg&oe=65346037" alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Website Design & Development | Mobile App</h5>
                                                <p class="card-text" style={{ color: 'gray' }} >14K Members 5+ Post a day</p>
                                                <a href="#" class="btn btn-primary w-100 ">Join Group</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card card_group">
                                            <div className='img-wrapper'>
                                                <img src="https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/329175397_6843180585698574_7542125076524392670_n.png?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wrRpCpRmv0kAX86ga3q&_nc_ht=scontent.ftir5-1.fna&oh=00_AfCS42G2DmTsMsnUU75PMMI78didFrtZh-aqUaeTAmnsZA&oe=65369C4F" alt="..." />
                                            </div>
                                            <div class="card-body ">
                                                <h5 class="card-title">Facebook Ads & Google Ads Services From Experts worldwide </h5>
                                                <p class="card-text" style={{ color: 'gray' }} >17K Members 9+ Post a day</p>
                                                <a href="#" class="btn btn-primary w-100 ">Join Group</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon py-3 rounded-5" style={{ backgroundColor: '#dddd' }} aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon py-3 rounded-5" style={{ backgroundColor: '#dddd' }} aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='post card rounded-3 mt-2 col-12 col-lg-8 col-xs-12 mx-auto' style={{ marginBottom: '60px' }}>
                            <div className='post_top d-flex justify-content-between p-2 '>
                                <div className='post_top_left d-flex '>
                                    <Avatar src='https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/383428625_670645028544966_6732994895593228112_n.png?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-ZzF_JgyBOcAX_6rGBo&_nc_ht=scontent.ftir5-1.fna&oh=00_AfBahx90StwDsV7wWa8OFeh1H__potu-Bshlm0_MClxE0A&oe=65369DD7' />
                                    <div className='postInfo mt-1 ms-2'>
                                        <h4 style={{ fontSize: '16px', marginBottom: '0' }}>Facebook Ads and Google Ads Community</h4>
                                        <p className='d-flex' style={{ fontSize: '12px' }}>12:00 pm<PublicIcon style={{ fontSize: '14px' }} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <IconButton className=''>
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <IconButton className=''>
                                        <CloseIcon />
                                    </IconButton>

                                </div>

                            </div>
                            <div className='post_middle mx-auto'>
                                <p className='ms-2'>I'm right there with you! come inbox</p>
                                <img src='https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/384271495_640763241577454_4626223999899684485_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=F6A6mTh8KSwAX9n5r0E&_nc_ht=scontent.ftir5-1.fna&oh=00_AfAHStbESKJJgQMf0OQUFK8eZr-9CKN6XBxAPXBkzK0nJA&oe=6535AC21' className='mx-auto' alt='' />

                            </div>
                            <div className='post_bottom mt-2 mb-2 d-flex justify-content-between'>
                                <div className='row'>

                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3'>
                                        <ThumbUpIcon /> <p className='ps-1 pt-3 '>Like</p>
                                    </div>
                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3 '>
                                        <ChatBubbleIcon /> <p className='ps-1 pt-3'>Comment</p>
                                    </div>
                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3 '>
                                        <ShareIcon /> <p className='ps-1 pt-3'>Share</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='post card rounded-3 mt-2 col-12 col-lg-8 col-xs-12 mx-auto' style={{ marginBottom: '60px' }}>
                            <div className='post_top d-flex justify-content-between p-2 '>
                                <div className='post_top_left d-flex '>
                                    <Avatar src='https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/378229042_3633505886893130_8584048747734670881_n.png?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RQxx2eFETKUAX96Ya1c&_nc_ht=scontent.ftir5-1.fna&oh=00_AfABtZV9YUa_LWv-LZtSHZAn9BEkJ3FlfIJrnTxq8uHEtQ&oe=65353340' />
                                    <div className='postInfo mt-1 ms-2'>
                                        <h4 style={{ fontSize: '16px', marginBottom: '0' }}>Shopify Dropshipping</h4>
                                        <p className='d-flex' style={{ fontSize: '12px' }}>12:00 pm<PublicIcon style={{ fontSize: '14px' }} /> </p>
                                    </div>
                                </div>
                                <div>
                                    <IconButton className=''>
                                        <MoreHorizIcon />
                                    </IconButton>
                                    <IconButton className=''>
                                        <CloseIcon />
                                    </IconButton>

                                </div>

                            </div>
                            <div className='post_middle mx-auto'>
                                <p className='ms-2'>I am a Shopify dropshipping expert with Of Five years Experience .</p>
                                <img src='https://scontent.ftir5-1.fna.fbcdn.net/v/t39.30808-6/378229042_3633505886893130_8584048747734670881_n.png?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RQxx2eFETKUAX96Ya1c&_nc_ht=scontent.ftir5-1.fna&oh=00_AfABtZV9YUa_LWv-LZtSHZAn9BEkJ3FlfIJrnTxq8uHEtQ&oe=65353340' className='mx-auto' alt='' />

                            </div>
                            <div className='post_bottom mt-2 mb-2 d-flex justify-content-between'>
                                <div className='row'>

                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3'>
                                        <ThumbUpIcon /> <p className='ps-1 pt-3 '>Like</p>
                                    </div>
                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3 '>
                                        <ChatBubbleIcon /> <p className='ps-1 pt-3'>Comment</p>
                                    </div>
                                    <div className='post_bottomOptions col-4 d-flex align-items-center px-5 rounded-3 '>
                                        <ShareIcon /> <p className='ps-1 pt-3'>Share</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    

                </div>

            </div>
        </div>
    )
}

export default Groups