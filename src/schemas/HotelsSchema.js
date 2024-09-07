import *  as YUP from'yup'
let HotelsSchema= YUP.object({
  name : YUP.string().required("Insert Your Full Name"),
  email : YUP.string().required("Insert Your Email Id"),
  
  address : YUP.string().required("Insert Your Address"),
  state : YUP.string().required("Select Your state"),
  city : YUP.string().required("Select Your City"),
  contact : YUP.string().required("Insert Your Contact Number")
});

export default HotelsSchema;