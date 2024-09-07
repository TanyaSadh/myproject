import React ,{ useState } from 'react'
// import Slider from '../shared/Slider'
import { NavLink ,useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import LoginSchema from '../../../schemas/LoginSchema'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'


const Login = () => {
let navigate = useNavigate();
let[errMsg,setErrMsg] = useState("");

let loginForm=useFormik({
  validationSchema:LoginSchema,
  initialValues:{
     email:"",
    password:""
  },
  onSubmit:(formdata)=>{
    axios.post(`${API_URL}/userauth` , formdata).then(response=>{
      //console.log(response.data);
if(response.data.success==true){
localStorage.setItem("access-token", response.data.token);
navigate("/user/my-booking")
}
if(response.data.success==false && response.data.errType == 1){
  setErrMsg("Incorrect username and password")
}
if(response.data.success==false && response.data.errType == 2){
  setErrMsg("Incorrect password")
}
if(response.data.success==false && response.data.errType == 3){
  setErrMsg("You are blocked , please contact the team ")
}
    })
  }
})

  return (
    <>
    {/* <Slider />  */}
<div className='container' style={{marginTop:"100px", minHeight:"600px"}}>
<div className="row">
  <div className='col-md-6 offset-md-3'>
    <form onSubmit={loginForm.handleSubmit}>
    <div className='card'>
      <div className='card-header bg-dark border border-dark
      '><h5 style={{color:"white"}}>User Login</h5>
      <small style={{color:"white"}}>If you are new user <NavLink to="/signup" style={{color:"yellow"}}>click here</NavLink>
        </small>
        <br />
        <small><NavLink to="/forgot-password" style={{color :"yellow"}}>Forgot Password?</NavLink></small>
        </div>
      <div className="card-body">
        <div className='my-4'>
          <label>Username/Email</label>
          <input type="text" name='email' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.email && loginForm.touched.email?'is-invalid': '')}/>{
            loginForm.errors.email && loginForm.touched.email? <small className='text text-danger'>{loginForm.errors.email}</small> : ''
          }
        </div>
        <div className='my-4'>
          <label >Password</label>
          <input type="password" name='password' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.password && loginForm.touched.password?'is-invalid': '')}/>
          {
            loginForm.errors.password && loginForm.touched.password? <small className='text text-danger'>{loginForm.errors.password}</small> : ''
          }
        </div>
      </div>
      <div className='card-footer'>
        <button  type='submit' className='btn btn-block'>Login</button>
        <p className='text text-center text-danger mt-3'>{errMsg}</p>
      </div>
    </div>
    </form>
  </div>
   
</div>
</div>
</>
  )
}

export default Login