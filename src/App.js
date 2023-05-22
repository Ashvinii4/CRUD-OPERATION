

import './App.css';
import EmployeeList from './components/EmployeeList';
import EmpCreate from './components/EmpCreate';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';


function App() {
 return (
   <div className="App">
     <h1>React Crud</h1>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<EmployeeList/>}></Route>
       <Route path='/employee/create' element={<EmpCreate/>}></Route>
       <Route path='/employee/detail/:empId' element={<EmpDetail/>}></Route>
       <Route path='/employee/edit/:empId' element={<EmpEdit/>}></Route>
     </Routes>
     </BrowserRouter>
   </div>
 );
}


export default App;


