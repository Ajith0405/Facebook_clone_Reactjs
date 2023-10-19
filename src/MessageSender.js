import { Avatar, IconButton, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './css/messageSender.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
//Authentication
import { isAunthenticate } from './services/Auth';
import { UserDetailsApi } from './services/Api'
//create post
import { imgDB, textDB } from './firebase/textImgConfig';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';




function MessageSender() {

    let [modal, setModal] = useState(false)

    let handleOpen = () => {
        setModal(true)
    }

    let handleClose = () => {
        setModal(false)
    }

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
                setUName(resp.data.users[0].displayName);
            })
        }
    }, [])

    //Create a post 
    const [uname, setUName] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [img, setImg] = useState('');

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    useEffect(() => {
        const timeId = setInterval(() => {
            const currentTime = hours + ':' + minutes;
            setTime(currentTime);
        }, 1000);
        return () => clearInterval(timeId);

    }, []);
    //    console.log(time);

    //image upload

    const [loading, setLoading] = useState(false);

    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        setLoading(true);
        const imgs = ref(imgDB, `imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            // console.log(data,"imgs");

            getDownloadURL(data.ref).then(val => {
                console.log(val);
                setImg(val);
            })
        })
        setTimeout(() => {
            setLoading(false)
        }, 6000);
    }
    //add message

    const handleAdd = async () => {

        const valRef = collection(textDB, 'textData')
        await addDoc(valRef, { name: uname, timeStamp: time, msg: message, imgUrl: img })
        // alert("Data added sucessfully")
        setTimeout(() => {
            alert("Post added successfully");
            // window.location.reload();
            setModal(false)
        }, 1000);
    }

    // console.log(uname);
    // console.log(message);

    const placeHolder = `What's on your mind ${uname} ?`

    return (
        <>
            <Modal open={modal} onClose={handleClose} style={{ outline: 'none' }} >
                <div className='row'>


                    <div className='modal_pop p-2 rounded-3 bg-light position-absolute top-50 start-50 translate-middle col-12 col-lg-7 '>

                        <div className='modalHeading d-flex pb-1' style={{ borderBottom: '1px solid gray' }}>
                            <h3 className='mx-auto'>Create Post</h3>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className='modalHeader_top d-flex align-items-center ' style={{ padding: '15px 0px' }}>
                            <Avatar />
                            <h5 className='ps-2 pt-1'>{user.name}</h5>
                        </div>
                        <div className='modalBody'>
                            <textarea className='w-100 ps-3' onChange={(e) => setMessage(e.target.value)} style={{ border: 'none', fontSize: '25px', outline: 'none', letterSpacing: '1px' }} rows="5" placeholder={placeHolder}></textarea>
                        </div>
                        <div className='modalFooter rounded-3 d-flex justify-content-between align-items-center' style={{ border: '1px solid gray', padding: '5px 10px' }}>
                            <div className='modalFooterLeft'>
                                <h4>Add to your post</h4>
                            </div>
                            <div className='modalFooterRight'>
                                <IconButton>
                                    <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize='large' />
                                    <input className='position-absolute' onChange={(e) => handleUpload(e)} style={{ fontSize: '4px', left: '10px', padding: '20px 0px', opacity: '0', cursor: 'pointer' }} type='file' />

                                </IconButton>
                                <IconButton>

                                    <VideoCallIcon style={{ color: 'orangered' }} fontSize='large' />

                                </IconButton>
                                <IconButton>

                                    <InsertEmoticonIcon style={{ color: '#ffb100' }} fontSize='large' />
                                </IconButton>
                            </div>

                        </div>
                        <div>
                            {loading ? (
                                <div className='d-flex justify-content-center'>
                                    <span className="spinner-border text-dark " role="status"></span>
                                </div>

                            ) : null}
                        </div>
                        <div className='modalFooterButton '>
                            <button type='submit' onClick={handleAdd} className='btn btn-primary py-2 mt-2 w-100 text-light'>
                                POST
                            </button>
                        </div>

                    </div>
                </div>
            </Modal>
            <div className='row'>
                <div className='messageSender card mt-3 p-3  mx-auto rounded-3 col-12 col-lg-10' style={{ boxShadow: '4px 2px 10px #ccc' }}>
                    <div className='messageSender_top d-flex align-items-center'>
                        <Avatar />
                        <form className='p-2 rounded-5 ms-2 w-100' style={{ backgroundColor: '#dddd', }}>
                            <input type='text' className='w-100' placeholder={placeHolder} onClick={handleOpen} style={{ border: 'none', outline: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}></input>
                        </form>
                    </div>
                    <div className='messageSender_bottom mt-2 d-flex justify-content-between' style={{ borderTop: '1px solid lightgray' }}>
                        <div className='row'>
                            <div className='messangerOption mt-2 px-4 rounded-3 d-flex align-items-center col-12 col-lg-4' style={{ cursor: 'pointer' }}>
                                <VideoCallIcon style={{ color: 'orangered' }} fontSize='large' />
                                <p className='mt-3 ms-2'>Live Video</p>
                            </div>
                            <div className='messangerOption mt-2 px-4 rounded-3 d-flex align-items-center col-12 col-lg-4' style={{ cursor: 'pointer' }}>
                                <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize='large' />
                                <p className='mt-3 ms-2'>Photo/Video </p>
                            </div>
                            <div className='messangerOption mt-2 px-4 rounded-3 d-flex align-items-center col-12 col-lg-4 ' style={{ cursor: 'pointer' }}>
                                <InsertEmoticonIcon style={{ color: '#ffb100' }} fontSize='large' />
                                <p className='mt-3 ms-2'>Feeling/Activity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default MessageSender