import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';


import { NavLink } from 'react-router-dom';





const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  
  const activeLink = " text-primaryblue transition duration-300 font-semibold border-b-[2px]  ";
  const normalLink = "";


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };




 
  
    return (
      <header className=' lg:w-[28rem]'> 
         <div className="flex flex-col lg:h-screen  lg:ml-8 mt-8    px-1     
          text-white    lg:fixed   "> 
          
                    
                    <div className='px-2  md:px-0 ' >
                      <NavLink to='/'>
                        <div className='flex'> 
                       <img   className='hover:cursor-pointer transition md:mt-2 h-8 ' src='./image/logo.png' alt=''/>
                     

                     
                          </div>
                         </NavLink>
                        
                     </div> 
                     

                     <div    className='md:flex flex-col  '> 
                        <ul id='nav' className=' text-sm   text-[#000000] hidden   md:flex flex-col    mt-1   '> 
                        
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Home </p>   </NavLink>
                            <NavLink to='/about'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>About Us </p>   </NavLink>
                              <NavLink to='/features'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Features </p>   </NavLink>
                              <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold'>Safety </p>   </NavLink>
                            
                             
                          
                            </ul> 
                     </div>


                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' md:hidden fixed h-10  flex-auto bg-white w-screen px-4 flex justify-between  items-center z-10 '> 
            <img className='w-8 h-8 rounded-full' src='./image/logo.png' alt='' />
             <img className='w-[7rem]' src='./image/logo.png' alt='' />
           
            {nav ? <AiOutlineClose className='text-[#000000]  text-2xl sm:text-3xl items-center  mt-1' /> :   <TbMenu2 className='text-[#000000] text-2xl sm:text-3xl items-center mt-1 left-0  duration-50 ' />}

            
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-start    text-2xl  absolute text-[#000000]  left-0 top-0    w-9/12  mx-auto z-10  bg-white  duration-300 flex h-full       flex-col' : 'absolute left-[-100%] '}>
              <div > 
                  <div  id='bold'> 
                      <ul  className=' text-xl  font-bold  flex flex-col space-y-4  text-[#000000]   w-fit ml-4  '>         
                                <img className='w-[7rem] mt-10' src='./image/logo.png' alt='' />
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Home</p>      </NavLink>
                            
                              <NavLink to='/about'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>About Us </p>      </NavLink>
                              <NavLink to='/features'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Features </p>      </NavLink>
                               <NavLink to='/safety'  className={({ isActive }) => (isActive ? activeLink : normalLink)}  > <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition   duration-200'>Safety </p>      </NavLink>
                               
                            
                            </ul>
                  </div>
        </div>
      </div>
            
        </div>
      </header>
       
    )
}

export default Sidebar;