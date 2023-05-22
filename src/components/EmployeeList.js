import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getEmpData } from "./EmployeeService";


const EmployeeList = () => {
   const[empdata,setEmpdata] = useState(null);

   const navigate = useNavigate();

   useEffect(()=>{
       fetch("http://localhost:3000/employee/").then((res) => {
           return res.json();
       }).then((response) => {
           setEmpdata(response);
       }).catch(error=>{
           console.log(error)});
   },[])

   
   const deleteEmp = (id) => {
       if(window.confirm('Do you really want delete')){
           fetch(" http://localhost:3000/employee/"+id,{
               method:"DELETE"
           }).then((res)=>{
               alert('Deleted Successfully');
              window.location.reload();
              
              //Axios
              getEmpData().then((response)=>{
                setEmpdata(response.data)
              })
           }).catch((err)=>{
               console.log(err.message);
           })
       }
   }


   const loadDetails = (id)=> {
       navigate('/employee/detail/'+id);
   }

   const editEmp = (id)=> {
       navigate('/employee/edit/'+id);
   }

   return (
       <div className="container">
           <div className="card">
               <div className="card-title">
                   <h2>Employee Listing</h2>
               </div>
               <div className="card-body">
                   <Link to={'/employee/create'} className="btn btn-success" >Add New</Link>
               <table className="table table-bordered">
                   <thead className="bg-dark text-white">
                       <tr>
                           <td>ID</td>
                           <td>Name</td>
                           <td>Email</td>
                           <td>Phone</td>
                           <td>Action</td>
                       </tr>
                   </thead>
                   <tbody>
                       {empdata&&empdata.map(item => (
                           <tr>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.email}</td>
                           <td>{item.phone}</td>
                               
                           
                           <td>
                               {/* <a onClick={()=>{}} className='btn btn-success'>Edit</a> */}
                               <a onClick={()=>{deleteEmp(item.id)}} className='btn btn-danger'>Delete</a>
                               <a onClick={()=>{loadDetails(item.id)}} className='btn btn-primary'>Details</a>
                               <a onClick={()=>{editEmp(item.id)}}className="btn btn-success">Edit</a>
                           </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
               </div>
           </div>
       </div>
   );
}
export default EmployeeList;
