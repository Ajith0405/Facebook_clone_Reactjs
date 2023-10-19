import React from 'react'
import { FaGift } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import PeopleIcon from '@mui/icons-material/People';
import './css/friends.css'
import Navbar from './Navbar';
import { Avatar, IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Groups2Icon from '@mui/icons-material/Groups2';

function Friends() {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className='row' style={{ marginTop: '65px' }}>
        <div className='col-3 col-lg-3 col-sm-3 col-md-3 d-none d-md-block' style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor:'#ffff'}} >
          <div>
            <div className='d-flex align-items-center justify-content-between mt-2 ms-2'>
              <h5 style={{ fontWeight: 'bold' }}>Friends</h5>
              <IconButton className='button_icon button_icon_setting '>
                <SettingsIcon fontSize='large' />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-1 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options' style={{ backgroundColor: ' #3085C3' }}>
                  <GroupIcon fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Home</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-2 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }}>
                  <PersonAddIcon fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Friend Request</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-2 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }}>
                  <GroupAddIcon fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Suggestions</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-2 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }}>
                  <Groups2Icon fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >All Friends</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-2 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }}>
                  <FaGift fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Birthdays</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
            <div className='option_buttons ms-2 ps-1 rounded-3 d-flex py-2 justify-content-between'>
              <div className='d-flex'>
                <IconButton className='button_icon_options_icon' style={{ backgroundColor: ' #dddd' }}>
                  <PiUserListFill fontSize='23px' />
                </IconButton>
                <h6 className='pt-2 ms-2' style={{ fontSize: '19px' }} >Coustom List</h6>
              </div>
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-9 col-md-9 col-sm-9 vh-100' style={{ overflow:'scroll'}}>
          <div className='container row' >
            <div className='col-12 col-lg-12 col-md-12 col-sm-12 my-3 w-100 d-flex justify-content-between'>
              <h5 style={{ fontWeight: 'bolder' }}>People you may know</h5>
              <a href='#' style={{ textDecoration: 'none' }} >See all</a>
            </div>
          </div>
          <div className='row' style={{marginBottom:'100px'}}>
            <div className='col-12 col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-1/52188112_2077319069056424_8526937209998147584_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=_O-v7pP0_pkAX-DyVZ8&_nc_ht=scontent-maa2-1.xx&oh=00_AfCGUqLge0sOWN9-TlF3pyLMpGHTtVONLWvGdveQahDBFQ&oe=65574216" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Kumar</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-1/380803524_1582392309236046_5320447376674740180_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0-Yob1QFcZkAX_dFXx4&_nc_oc=AQnGUHkYX3GfaG-uKF4ZADIAqcUG78126f3WNi_P7VpGR9QMGX_pwmCN8YLynaeGWxo&_nc_ht=scontent-maa2-2.xx&oh=00_AfBjBEXd5h7cLiM3ntx3OgHAG5K_2OcVpL3VvBq4F9HHvw&oe=65342BC5" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Praveen</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-1/387081926_712240487598325_7206577047470208713_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YLDTWR_XONMAX9fRERx&_nc_ht=scontent-maa2-2.xx&oh=00_AfB3UC31tbrgy4w38Z1WUeKEJUera3zjH2WnH3l_8gs-nA&oe=6533BFEC" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Kishore</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent-maa2-1.xx.fbcdn.net/v/t39.30808-1/379837154_3471260089793800_2052540293556597379_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sBBGmnkO5oYAX__4u_y&_nc_oc=AQmcAfC5GhT_dSGnR1PO42K-GsTO5qdYJJUbJyvTrw9P2T6aM6DEnEdMZ8HidOskpzg&_nc_ht=scontent-maa2-1.xx&oh=00_AfCGCRGWWofGCXxJnXPXppGsX_B5JqLCo3v_fTczqyG6XA&oe=6535A6A8" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Praveen K</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkK-5NUX8MXGcGglFPav95L1TwjESK3MlQQ&usqp=CAU" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Hari Basker</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent.fcjb5-1.fna.fbcdn.net/v/t1.6435-1/89490577_226731992062840_4195551443186352128_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=85K-KIu1kqMAX-JwIAQ&_nc_ht=scontent.fcjb5-1.fna&oh=00_AfBg3kQQ2yI9PFW-SyxRFou_z_bKc76zTzw6BSXQbFVBtw&oe=655724E3" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Ananandraj</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src='https://scontent-maa2-2.xx.fbcdn.net/v/t1.6435-1/82342860_1363455717167004_2970837009016291328_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=F2G_GnmX6ZsAX9lKqV5&_nc_ht=scontent-maa2-2.xx&oh=00_AfAw69nY3TN2fFep6i3a75ksdm99ARKbItsdgb12H5E_DQ&oe=65573580' alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Vijay</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className="card rounded-3 mx-auto mb-2" style={{ width: '250px' }}>
                <img className="card-img-top" src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-1/375868357_1407929986451455_7137531368001204871_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wmWZkuGbyOgAX8ee1rf&_nc_ht=scontent-maa2-2.xx&oh=00_AfAkrJIyNcxKDj9ubWyHpRnHCArIItH-sFE2g3RqQLSPQA&oe=6533B80E" alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Shreeram</h4>
                  <div className='d-flex flex-column'>
                    <button className='btn btn-primary mb-2'>Add Friend</button>
                    <button className='btn' style={{background:'#dddd'}}>Remove</button>
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

export default Friends