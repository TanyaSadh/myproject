import * as YUP from 'yup'

let AdminDestinationSchema = YUP.object({
  title: YUP.string().required("Insert title"),
  category:YUP.string().required("Select Category"),
  detail:YUP.string().required("Insert detail")
});

export default AdminDestinationSchema;