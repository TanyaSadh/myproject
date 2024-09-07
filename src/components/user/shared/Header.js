import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header>

       <div className="header-area">
            <div className="main-header ">
                <div className="header-top top-bg d-none d-lg-block">
                   <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8">
                            <div className="header-info-left">
                                <ul>                          
                                    <li>needhelp@gotrip.com</li>
                                    <li>666 569 025077</li>
                                    <li>broklyn street new york</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header-info-right f-right">
                                <ul className="header-social">    
                                    <li><NavLink href="#"><i className="fab fa-twitter"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-linkedin-in"></i></NavLink></li>
                                    <li><NavLink href="#"><i className="fab fa-facebook-f"></i></NavLink></li>
                                   <li> <NavLink href="#"><i className="fab fa-pinterest-p"></i></NavLink></li>
                                </ul>
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
               <div className="header-bottom  header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                  <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>               
                                        <ul id="navigation">                                 
                                            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                                            <li><NavLink to="/about">About US</NavLink></li>
                                            <li className="nav-item dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">Destination</a>
              <div className='dropdown-menu'>
                <NavLink to='/destination/Wildlife' className='dropdown-item' style={{padding:"10px 0px 10px 50px"}}>Wildlife</NavLink>
                <NavLink to='/destination/Nature' className='dropdown-item' style={{padding:"10px 0px 10px 50px"}}>Nature</NavLink>
                <NavLink to='/destination/Heritage' className='dropdown-item' style={{padding:"10px 0px 10px 50px"}}>Heritage</NavLink>
                <NavLink to='/destination/Spiritual' className='dropdown-item' style={{padding:"10px 0px 10px 50px"}}>Spiritual</NavLink>
              </div></li>
                                           
                                            
                                            {
                                                localStorage.getItem("access-token")?
                                                <>
                                                <li className="nav-item"><NavLink to="/user/my-booking">My-Booking</NavLink></li>
                                            
                                            <li className="nav-item"><NavLink to="/user/my-profile">My-Profile</NavLink></li>
                                            <li className="nav-item"><NavLink to="/user/logout">Logout</NavLink></li>
                                                </>
                                                :
                                                <>
                                                 <li className="nav-item"><NavLink to="/login">Login</NavLink></li>
                                            <li className="nav-item"><NavLink to="/signup">Signup</NavLink></li>
                                                </>

                                            }
                                            <li className="nav-item"><NavLink to="/">Book Now</NavLink></li>
                                            
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
        
    </header>
        </>
    )
}

export default Header