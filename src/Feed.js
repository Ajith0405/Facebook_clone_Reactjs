import React, { useEffect, useState } from 'react'
import Storyreel from './Storyreel'
// import './css/feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import { isAunthenticate } from './services/Auth';
import { UserDetailsApi } from './services/Api'

import { imgDB, textDB } from './firebase/textImgConfig';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function Feed() {
  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [data, setData] = useState([])

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
  },)

  //post retrive from firebase database
  const getData = async () => {
    const valRef = collection(textDB, 'textData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    setData(allData)
    console.log(dataDb);
  }

  useEffect(() => {
    getData()
  })
  console.log(data, "data");
  return (
    <div className='row'>
      <div className='feed col-12 col-lg-12 '>
        <Storyreel />
        <MessageSender />
        {
          data.map(value => <div>
            <Post photoUrl="" image={value.imgUrl} username={value.name} timestamp={value.timeStamp} message={value.msg} />
          </div>)
        }

        <Post photoUrl="" image="" username={user.name} timestamp="12:40PM" message="This is text messsage" />
        <Post photoUrl="https://i.pinimg.com/736x/22/1e/58/221e588b5c61bda7a9346b32aadb7c04.jpg" image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.1.1075078356.1696517555&semt=sph" username="Sudha" timestamp="1:40PM" message="This is text messsage" />
        <Post photoUrl="https://i.pinimg.com/736x/22/1e/58/221e588b5c61bda7a9346b32aadb7c04.jpg" image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.1.1075078356.1696517555&semt=sph" username="Sudha" timestamp="1:40PM" message="This is text messsage" />
        <Post photoUrl="https://i.pinimg.com/736x/22/1e/58/221e588b5c61bda7a9346b32aadb7c04.jpg" image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.1.1075078356.1696517555&semt=sph" username="Sudha" timestamp="1:40PM" message="This is text messsage" />
        <Post photoUrl="https://i.pinimg.com/736x/22/1e/58/221e588b5c61bda7a9346b32aadb7c04.jpg" image="https://img.freepik.com/free-photo/colorful-powder-explosion-happy-holi-festival-colors-art-concept_90220-1170.jpg?size=626&ext=jpg&ga=GA1.1.1075078356.1696517555&semt=sph" username="Sudha" timestamp="1:40PM" message="This is text messsage" />
      </div>
    </div>
  )
}

export default Feed