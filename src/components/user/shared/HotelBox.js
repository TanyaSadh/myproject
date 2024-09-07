import React from 'react'

const HotelBox = (props) => {
  return (
   
        <div  className="col-xl-4 col-lg-4 col-md-6">
<div className="single-place mb-30">
    <div className="place-img">
        <img src="/assets/img/service/services1.jpg" alt=""/>
    </div>
    <div className="place-cap">
        <div className="place-cap-top">
            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
            <h3><a href="#">{props.info.name}</a></h3>
        </div>
        <div className="place-cap-bottom">
            <a href="" className='btn btn-info rounded-pill '> Detail</a>
        </div>
    </div>
</div>
</div>
  )
}

export default HotelBox