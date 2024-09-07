import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../shared/Slider'
import { useFormik } from 'formik'
import { API_URL } from '../../../util/API_URL'
import axios from 'axios'

const ForgotPassword = () => {
let [showForm , setShowForm] = useState(false);

 let [errMsg , setErrMsg] = useState("");
let [otp , setOtp] = useState();

    let forgotForm = useFormik({
       
        initialValues:{
            username:""
        },
        onSubmit : async (formdata, {resetForm})=>{
            let response = await axios.post(`${API_URL}/signup/forgot`, formdata);
            if(response.data.success==true)
            {
                setOtp(response.data.otp);
                resetForm();
                setShowForm(true);
            }else{
                setErrMsg("This Email id not registered");
            }
        }
    })

  return (
    <>
    
        
<div className='container' style={{marginTop:"100px", minHeight:"600px"}}>
    {
        showForm == false
         ?
         <form onSubmit={forgotForm.handleSubmit}>
         <div className="row">
             
             <div className="col-md-6 offset-md-3">
                 <h4 >Forgot Your Password</h4>
                 <label >Insert Your Email</label>
                 <input  value={forgotForm.values.username}  name='username' onChange={forgotForm.handleChange} type='text' className='form-control my-2' />
                 
                 <button className='btn btn-info my-2'>Get A Link</button>
                 <br />
                 <small className='text-danger text-center'>{errMsg}</small>
             </div>
             
                 </div>
                 </form> :
                 <Otp otp1 = {otp}/>
                 
    }


           
</div>

</>
  )
}


let Otp = (props)=>{
    console.log(props.otp1)
    let [errMsg, setErrMsg] = useState("");
    let [showForm2, setShowForm2] = useState(false);
    let otpForm = useFormik({
        enableReinitialize : true,
        initialValues : {
            otp : ""
        },
        onSubmit : (formdata)=>{
            
            if(formdata.otp == props.otp1)
            {
                setShowForm2(true);
            }
            else{ 
                setErrMsg("This OTP in Incorrect")
            }
        }
    })
    return(
        
            showForm2==false
            ?
            <form onSubmit={otpForm.handleSubmit}>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <h4>Insert OTP</h4>
                        <label>OTP</label>
                        <input name='otp' onChange={otpForm.handleChange} type='text' className='form-control' />
                        <br />
                        <button type='submit' className='btn btn-info'>Enter OTP</button>
                        <br />
                        <small className='text-danger'>{errMsg}</small>
                    </div>
                </div>
            </form>
            :
            <NewPassword otp2 = {props.otp1} />
        
    )
}


let NewPassword = (props)=>{
    let navigate = useNavigate();
    let newPassForm = useFormik({
        initialValues : {
            password : "",
            confirmpassword : ""
        },
        onSubmit : async (formdata)=>{
            formdata.otp = props.otp2;
            let response = await axios.post(`${API_URL}/signup/changepassword`, formdata);
            navigate("/login");
        }
    })

    return(
        <form onSubmit={newPassForm.handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <label>New Password</label>
                    <input name='password' onChange={newPassForm.handleChange} type='password' className='form-control' />
                    <br />
                    <label>Confirm New Password</label>
                    <input name='confirmpassword' onChange={newPassForm.handleChange} type='password' className='form-control' />
                    <br />
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </div>
        </form>
    )
}
export default ForgotPassword