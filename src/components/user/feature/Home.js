import React , {useEffect,useState} from 'react'
import { API_URL } from '../../../util/API_URL'
import axios from 'axios'
import DestinationBox from '../shared/DestinationBox'
import HotelBox from '../shared/HotelBox'
import Slider from '../shared/Slider'

const Home = () => {
    let[allDestination,setAllDestination]=useState([]);
    let [allHotels, setAllHotels] = useState([]);
	useEffect(() => {
		getAllData();
	}, [])

	let getAllData = async()=>{
		// axios.get(`${API_URL}/destination`).then(response => {
		// 	setAllDestination(response.data);
		// })
		// axios.get(`${API_URL}/hotels`).then(response => {
		// 	setAllHotels(response.data);
		// })
		let response1 = await axios.get(`${API_URL}/destination`)
		setAllDestination(response1.data);

		let response2 = await axios.get(`${API_URL}/hotels`);
		setAllHotels(response2.data);
	}

  return (
    <>
    <Slider/>
   <div className="our-services servic-padding">
            <div className="container">
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                                <h5>8000+ Our Local<br/>Guides</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-pay"></span>
                            </div>
                            <div className="services-cap">
                                <h5>100% Trusted Tour<br/>Agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-experience"></span>
                            </div>
                            <div className="services-cap">
                                <h5>28+ Years of Travel<br/>Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-good"></span>
                            </div>
                            <div className="services-cap">
                                <h5>98% Our Travelers<br/>are Happy</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="favourite-place place-padding">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Latest Hotels</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                   
                    {
							allHotels.map(value=><HotelBox info={value} />)
						}
                    </div>
                    
                </div>
            </div>
        
        <div className="favourite-place place-padding">
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Latest Destination</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        allDestination.map(value=>{
                            
                                    return(
                                           <DestinationBox value = {value} />
                                                    )
                            
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
        
      
       
       </>
  )
}

export default Home