import React from 'react'

const Slider = () => {
    return (
        <>
           <div className="slider-area ">
           
           <div className="slider-active">
               <div className="single-slider hero-overly  slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
                   <div className="container">
                       <div className="row">
                           <div className="col-xl-9 col-lg-9 col-md-9">
                               <div className="hero__caption">
                                   <h1>Find your <span>Next tour!</span> </h1>
                                   <p>Where would you like to go?</p>
                               </div>
                           </div>
                       </div>
                     
                       <div className="row">
                           <div className="col-xl-12">
                              
                               <form action="#" className="search-box">
                                   <div className="input-form mb-30">
                                       <input type="text" placeholder="When Would you like to go ?"/>
                                   </div>
                                   <div className="select-form mb-30">
                                       <div className="select-itms">
                                           <select name="select" id="select1">
                                               <option value="">When</option>
                                               <option value="">Services-1</option>
                                               <option value="">Services-2</option>
                                               <option value="">Services-3</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div className="search-form mb-30">
                                       <a href="#">Search</a>
                                   </div>	
                               </form>	
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
        </>
    )
}

export default Slider;