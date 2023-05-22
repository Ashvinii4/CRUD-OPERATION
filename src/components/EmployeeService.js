import axios from "axios";


const getEmpData = () => {
   return axios.get("http://localhost:6000/employee")
}


const editEmpData = () => {
   return axios.put("http://localhost:6000/employee")
}


export  {getEmpData,editEmpData};

