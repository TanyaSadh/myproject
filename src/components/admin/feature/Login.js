import React, { useState , useEffect} from 'react'
import {useFormik} from 'formik'
import AdminLoginSchema from '../../../schemas/AdminLoginSchema'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import {useNavigate} from 'react-router-dom'

const Login = () => {
let navigate = useNavigate();
useEffect(()=>{
    if(localStorage.getItem("admin-token")){
        navigate("/admin/dashboard");
    }
},[])
    
    let [errMsg, setErrMsg] = useState("");
    
    let loginForm = useFormik({
        initialValues : { username : "", password : ""},
        onSubmit : (formdata)=>{
            axios.post(`${API_URL}/adminauth`, formdata).then(response=>{
                if(response.data.success == true)
                {
                    localStorage.setItem("admin-token", response.data.token);
                    navigate("/admin/dashboard");
                    console.log({success:true});
                }
                else{
                    setErrMsg("This Username and Password Incorrect");
                    console.log({success:false});
                }
            })
        },
        validationSchema : AdminLoginSchema
    })

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={loginForm.handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h4>Administartor Login</h4>
                    </div>
                    <div className="card-body">
                        <div className='my-3'>
                            <label>Username</label>
                            <input name='username' onChange={loginForm.handleChange} type='text' className={'form-control '+(loginForm.errors.username && loginForm.touched.username ? 'is-invalid' : '')} />
                            {
                      loginForm.errors.username && loginForm.touched.username ? <small className='text-danger'>{loginForm.errors.username}</small> : ''
                    }
                        </div>
                        <div className='my-3'>
                            <label>Password</label>
                            <input name='password' onChange={loginForm.handleChange} type='password' className={'form-control '+(loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />{
                      loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{loginForm.errors.password}</small> : ''
                    }
                        </div>
                        {
                            errMsg 
                            ?
                            <p className='text-danger text-center'>{errMsg}</p>
                            :
                            ''
                        }
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-dark' type='submit'>Login</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login