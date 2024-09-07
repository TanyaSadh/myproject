import React , {useState , useEffect} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import HotelsSchema from '../../../schemas/HotelsSchema'
const Hotels = () => {
    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/city/state`).then(response=>{
          setState(response.data);
        })
      },[])


      let getcity = (event)=>{
        let x = event.target.value;
        axios.get(`${API_URL}/city/getcitybystate/${x}`).then(response=>{
          setCity(response.data);
          
        })
      }
    
    


    let navigate = useNavigate();
    let addForm = useFormik({
      validationSchema: HotelsSchema ,
      initialValues : {
        name : "",
        address : "",
        city : "",
        state : "",
        contact : "",
        email : ""
      },
      onSubmit : (formdata)=>{
        axios.post(`${API_URL}/hotels`, formdata).then(response=>{
          // console.log(response.data);
          navigate("/admin/hotels/list");
        })
      }
    })

  return (
    <div className="container my-4">
      <NavLink to="/admin/hotels/list" className="btn btn-info">View All Hotels</NavLink>
        <form onSubmit={addForm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className='text-center'>Add Hotels</h3>
          <div className='my-3'>
            <label>Hotel Name</label>
            <input type='text' name='name' onChange={addForm.handleChange} className={'form-control ' + (addForm.errors.name && addForm.touched.name?'is-invalid': '')} />
            {
            addForm.errors.name && addForm.touched.name? <small className='text text-danger'>{addForm.errors.name}</small> : ''
          }
          </div>
          
          <div className='my-4'>
                    <label>State</label>
                    <select name='state' onChange={(event)=>{getcity(event); addForm.handleChange(event)}} className={'form-control ' + (addForm.errors.email && addForm.touched.email ? 'is-invalid' : '')} >
                      <option>Select</option>
                      {
                        state.map((value, index)=><option key={index}>{value}</option>)
                      }
                    </select>
                    {
                      addForm.errors.state&& addForm.touched.state?<small className='text-danger'>{addForm.errors.state}</small>:""
                    }
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className={'form-control ' + (addForm.errors.email && addForm.touched.email ? 'is-invalid' : '')} name='city' onChange={addForm.handleChange}>
                      <option>Select</option>
                      {
                        city.map(value=><option key={value._id}>{value.name}</option>)
                      }
                    </select>
                    {
                      addForm.errors.city&& addForm.touched.city?<small className='text-danger'>{addForm.errors.city}</small>:""
                    }
                  </div>
          <div className='my-3'>
            <label>Address</label>
            <textarea name='address' onChange={addForm.handleChange} className={'form-control ' + (addForm.errors.address && addForm.touched.address?'is-invalid': '')} rows="10"></textarea>
            {
            addForm.errors.address && addForm.touched.address? <small className='text text-danger'>{addForm.errors.address}</small> : ''
          }
          </div>
          <div className='my-3'>
          <label>Contact</label>
            <input type='text' name='contact' onChange={addForm.handleChange} className={'form-control ' + (addForm.errors.contact && addForm.touched.contact?'is-invalid': '')} />
            {
            addForm.errors.contact && addForm.touched.contact? <small className='text text-danger'>{addForm.errors.contact}</small> : ''
          }
          </div>
          <div className='my-3'>
          <label>email</label>
            <input type='text' name='email' onChange={addForm.handleChange} className={'form-control ' + (addForm.errors.email && addForm.touched.email?'is-invalid': '')} />
            {
            addForm.errors.email && addForm.touched.email? <small className='text text-danger'>{addForm.errors.email}</small> : ''
          }
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Hotels


