'use client'
import React, { useState } from 'react'
import { FileInput } from '../components/FileInput';
import Table from '../components/Table';
import { data } from '../Data';
const page = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active , setActive]=useState(1)
  const handleOption=(index)=>{
    setActive(index)
    setShowSidebar((prev)=>!prev)
  }
  return (
    <div className='flex'>
      <div className={`sideBar bg-white w-1/5 ${showSidebar ? 'absolute' : 'hidden sm:block'} `} style={{ zIndex: 9999 }}>
        <div className="head m-10 flex justify-content">
          <img src="./icons/DashLogo.svg" alt="" />
          <img src="./icons/Close.svg" alt="" className='md:hidden' style={{'marginLeft':'50%'}} onClick={()=>setShowSidebar(false)}/>
        </div>
        <div className="menu-items mt-20">
          <div className="option flex items-center" onClick={()=>handleOption(0)}>
            <img src="./icons/Dashboard.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==0?'blue':'black'}}>Dashboard</h2>
          </div>
          <div className="option flex items-center"  onClick={()=>handleOption(1)}>
            <img src="./icons/Upload.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==1?'blue':'black'}}>Upload</h2>
          </div>
          <div className="option flex items-center" onClick={()=>handleOption(2)}>
            <img src="./icons/Invoice.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==2?'blue':'black'}}>Invoice</h2>
          </div>
          <div className="option flex items-center" onClick={()=>handleOption(3)}>
            <img src="./icons/Schedule.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==3?'blue':'black'}}>Schedule</h2>
          </div>
          <div className="option flex items-center" onClick={()=>handleOption(4)}>
            <img src="./icons/Calender.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==4?'blue':'black'}}>Calender</h2>
          </div>
          <div className="option flex items-center" onClick={()=>handleOption(5)}>
            <img src="./icons/Notification.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==5?'blue':'black'}}>Notification</h2>
          </div>
          <div className="option flex items-center" onClick={()=>handleOption(6)}>
            <img src="./icons/Settings.svg" alt="" className='opt-icon' />
            <h2 style={{color:active==6?'blue':'black'}}>Settings</h2>
          </div>
        </div>

      </div>
      {showSidebar?<></>:
      <div className="content w-screen">
        <div className="navbar flex mt-10 justify-between">
          <h1 className="hidden sm:block ml-10">Upload CSV</h1>
          <div className="navIcon flex ">
          <img src="./icons/Hamburger.svg" alt=""  className='md:hidden ml-5 mr-2' onClick={() => setShowSidebar(true)}/>
          <img src="./icons/DashLogo.svg" alt="" className='sm:hidden w-15 navbar-logo' />
          </div>
          <div className="profile  flex ">
            <img src="./icons/Bell.svg" alt="" className='bell' />
            <img src="./icons/Avatar.svg" alt="" />
          </div>
        </div>
        <div className="main-content">
          <FileInput/>
          <div className='mt-10 uploadTable'>
            <h1 className='ml-20'>Uploads</h1>
            <Table data={data}/>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default page