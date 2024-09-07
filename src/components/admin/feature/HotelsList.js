import React , {useState , useEffect, useRef} from 'react'
import axios from 'axios'

import { API_URL } from '../../../util/API_URL'
const HotelsList = () => {
  let x = useRef();
let btn = useRef();

let[hotels,setHotels]=useState({});
  let[allHotels , setAllHotels] = useState([]);

  let getAllData=async()=>{
   let response= axios.get(`${API_URL}/hotels`)
   setAllHotels((await response).data);
  }
  useEffect(()=>{
    getAllData();

  },[])

  
  let askDelete = (obj)=>{
    setHotels(obj);
  }

  let confirmDelete = async()=>{
   let response = await axios.delete(`${API_URL}/hotels/${hotels._id}`);
     btn.current.click();
     setAllHotels(()=>{
      return allHotels.filter(value=> value._id != hotels._id);
     })
 
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>List of All Hotels</h3>
         
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allHotels.map((value,index)=>{
                  return(
                    <tr key ={value._id}>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td>{value.city}</td>
                      <td>{value.address}</td>
                      <td>{value.contact}</td>
                      <td>{value.email}</td>
                      <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btm-sm'>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className='modal fade' id='delModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Delete Hotel</h3>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure want to delete <b>{hotels.name}</b></p>
                        </div>
                        <div className="modal-footer">
                            <button  ref={btn} data-dismiss="modal" className='btn btn-dark'>Close</button>
                            <button onClick={confirmDelete} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>

  )
}

export default HotelsList