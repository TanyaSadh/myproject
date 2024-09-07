import *  as YUP from'yup'
let SignupSchema= YUP.object({
  name : YUP.string().test("checkUppercase","First letter must be capital",(value)=>{
    let arr = value.split("");
    let firstletter = arr[0];
    if(firstletter.toUpperCase()==firstletter){
      return true;
    }else{
      return false ;

    }
  }
    
  ).required("Insert Your Full Name"),
  email : YUP.string().email("incorrect email Id").required("Insert Your Email Id"),
  password : YUP.string().test("strongpass","Password should be strong",(value)=>{
    let reg =/^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{4,}$/;
    if(reg.test(value)==false)
      {
        return false;
      }
      else
      {
        return true;
      }

  }).required("Insert Your Password"),
  repassword : YUP.string().oneOf([YUP.ref('password')],"Password & Repassword must be same").required("Insert Your Re-Password"),
  address : YUP.string().required("Insert Your Address"),
  gender : YUP.string().required("Select Your Gender"),
  state : YUP.string().required("Select Your State"),
  city : YUP.string().required("Select Your City"),
  contact : YUP.number().typeError("Insert numbers only").test("checkNum","contact number must be of 10 to 12 digits",(value)=>{
    if(value.toString().length>=10 && value.toString().length<=12){
      return true ;
    }else{
      return false ;
    }
    
  }).required("Insert Your Contact Number")
});

export default SignupSchema;