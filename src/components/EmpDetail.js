import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmpDetail = () => {

    const {empId} = useParams();
    const[empdata,setEmpdata] = useState({});

  useEffect(()=>{
       fetch('http://localhost:3000/employee/'+empId).then((res)=>{
           return res.json();
       }).then((response)=>{
           setEmpdata(response);
       }).catch((error)=>{
           console.log(error);
       })
   },[]);

  return(
    <>
   <h1>EmpDetail Component</h1>
   <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{empdata.id}</td>
      <td>{empdata.name}</td>
      <td>{empdata.email}</td>
      <td>{empdata.phone}</td>
    </tr>
</tbody>
</table>
</>
);
}
export default EmpDetail;
