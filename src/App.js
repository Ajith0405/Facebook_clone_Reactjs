import Feed from "./Feed";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./Login";
import Navbar from "./Navbar";
import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Friends from "./Friends";
import Groups from "./Groups";
import HomePage from "./HomePage";


function App() {
  

  return (
    <div>
      
          <div>
            {/* <Navbar /> */}
            <BrowserRouter>
              <Routes>
                <Route index element={<Login/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                {/* <Route path="/homePage" element={<HomePage/>}/> */}
                <Route path="/friends" element={<Friends/>} />
                <Route path="/groups" element={<Groups/>} />
              </Routes>
            </BrowserRouter>
            <div className="app_body">
              {/* <Sidebar />
              <Feed />
              <RightSidebar /> */}

              {/*Post*/}
              {/*RightSidebar*/}


            </div>
          </div>
        

      
      {/* <Header/> */}

    </div>
  );
}

export default App;
