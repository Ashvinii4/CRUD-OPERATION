import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";


const EmpEdit = () => {


   const {empId} = useParams();
   const navigate = useNavigate();


   useEffect(()=>{
       fetch("http://localhost:3000/employee/"+empId).then((res)=>{
           return res.json();
       }).then((response)=>{
           setId(response.id);
           setName(response.name);
           setEmail(response.email);
           setPhone(response.phone);
       }).catch((error)=>{
           console.log(error);
       })
   },[]);


   const[id,setId] = useState('');
   const[name,setName] = useState('');
   const[email,setEmail] = useState('');
   const[phone,setPhone] = useState('');


   const handleSubmit = (event) => {
       event.preventDefault();
       const empdata = {id,name,email,phone};


       fetch("http://localhost:3000/employee/"+empId,{
           method:'PUT',
           headers:{"content-type":"application/json"},
           body:JSON.stringify(empdata)
       }).then((res)=>{
           alert("Updated successfully");
           navigate("/");
       }).catch((error)=>{
           console.log(error);
       })


   }


   return (
       <div>
           <div className="row">
               <div className="offset-lg-3 col-lg-6">
                   <form className="container" onSubmit={handleSubmit} >
                       <div className="card" style={{ "textAlign": "left" }}>
                           <div className="card-title">
                               <h2>Employee Edit</h2>
                           </div>
                           <div className="card-body">
                               <div className="row">
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>ID</label>
                                           <input value={id}disabled="disabled" className="form-control"></input>
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Name</label>
                                           <input required value={name} onChange={(event)=>{setName(event.target.value)}} className="form-control"></input>
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Email</label>
                                           <input value={email} onChange={(event)=>{setEmail(event.target.value)}}className="form-control"></input>
                                       </div>
                                   </div>


                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Phone</label>
                                           <input value={phone} className="form-control" onChange={(event)=>{setPhone(event.target.value)}}></input>
                                       </div>
                                   </div>


                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <button className="btn btn-success" type="submit" >Save</button>
                                           
                                           <Link to={"/"} className="btn btn-danger">Back</Link>
                                           
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   );
}
export default EmpEdit;

                               