import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

function Home() {
    return (
        <div className=''>
            <Navbar />
            <div className='vh-100 ' style={{ paddingTop: '50px', overflowX: 'hidden', overflowY: 'auto'}}>
                
                <div className='row'>
                    <div className='col-3 col-lg-3 col-md-3 d-none d-md-block ' >
                        <Sidebar />
                    </div>
                    <div className='col-12 col-lg-6 col-md-7'>
                        <Feed />
                    </div>
                    <div className='col-2 col-lg-3 col-md-2 d-none d-md-block'>
                        <RightSidebar />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Home