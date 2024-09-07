import React , {useState , useEffect} from 'react'
import Slider from '../shared/Slider'
import axios from 'axios'

const About = () => {

useEffect(()=>{
 let a = localStorage.getItem("access-token");
 console.log(a);
},[])
 let[stu , setStu]=useState({name:"",fee:"", subject:""})
  // let[name,setName]=useState("");
  // let[age,setAge]=useState("");
  // let[salary,setSalary]=useState("");

   let demo=()=>{
    console.log(stu);
    //let obj ={ name:name , age: age ,salary:salary};
     axios.post("http://localhost:8080/api/demo",stu).then(response=>{
    console.log(response);
      })
  }
  return (
    <>
    <Slider />
<div className='container' style={{marginTop:"100px", minHeight:"600px"}}>
<div className="row">
  <h2>About Page</h2>
  <br/>
   <input type="text" onChange={(event)=>setStu({...stu,name:event.target.value})} className='form-control'/> 
  <br />
   <input type="text" onChange={(event)=>setStu({...stu,fee:event.target.value})}  className='form-control'/> 
  <br />
   <input type="text" onChange={(event)=>setStu({...stu,subject:event.target.value})}  className='form-control'/> 
  {/* <input type="text" onChange={(event)=>setName(event.target.value)}  className='form-control'/> 
  <br/>
  
  <input type="text" onChange={(event)=>setAge(event.target.value)}  className='form-control' style={{marginTop:"20px"}}/> 
  <br />
  <input type="text" onChange={(event)=>setSalary(event.target.value)}  className='form-control' style={{marginTop:"20px"}}/>
  <br /> */}
  <button onClick={demo} className='btn btn-info'>Ok</button>
  <br/>
  
  
</div>
</div>
</>
  )
}

export default About