import React from 'react'
 import { API_PATH } from '../../../util/API_URL'
const DestinationBox = (props) => {
  return (
   
        <div  className="col-xl-4 col-lg-4 col-md-6">
<div className="single-place mb-30">
    <div className="place-img">
    {/* <a href="#" className="img" style={{ backgroundImage: `url(${API_PATH}/destination-images/${props.value.image})` }}></a> */}

        {/* <img src="/assets/img/service/services1.jpg" alt=""/> */}
        <img src={API_PATH+"/images/"+props.image} alt=""/>
        <h1>{props.image}</h1>
    </div>
    <div className="place-cap">
        <div className="place-cap-top">
            <span><i className="fas fa-star"></i><span>8.0 Superb</span> </span>
            <h3><a href="#">{props.value.title}</a></h3>
        </div>
        <div className="place-cap-bottom">
            <a href="" className='btn btn-info rounded-pill '> Detail</a>
        </div>
    </div>
</div>
</div>
  )
}

export default DestinationBox