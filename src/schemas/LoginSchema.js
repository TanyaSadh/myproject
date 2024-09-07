import * as YUP from 'yup'

let LoginSchema = YUP.object({
  email: YUP.string().required("Insert email/username"),
  password:YUP.string().required("Insert password")
});

export default LoginSchema;