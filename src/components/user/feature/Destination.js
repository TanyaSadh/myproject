import React , {useEffect , useState} from 'react'
import Slider from '../shared/Slider'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../shared/DestinationBox'

const Destination = () => {
let params = useParams();
let[allDestination,setAllDestination]=useState([]);
useEffect(()=>{
     axios.get(`${API_URL}/destination/category/${params.x}`).then(response=>{
      setAllDestination(response.data);
     })
},[params])
  return (
    <>
    {/* <Slider /> */}
<div className='container' style={{marginTop:"100px", minHeight:"600px"}}>
<div className="row">
  <h2>Destination Page</h2>
  <div className='container'>
  <div className="row">
                    {
                        allDestination.map(value=>{
                            return(
                               <DestinationBox value={value}/>
                            )
                        })
                    }
                    
                    
          </div>

     </div>
</div>
</div>
</>
  )
}

export default Destination