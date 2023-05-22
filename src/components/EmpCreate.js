import { useState } from "react";
import { useNavigate , Link } from 'react-router-dom';


const EmpCreate = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const empData = { name, email, phone };
        console.log(empData);

        fetch("http://localhost:3000/employee/", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert('Data added successfully!!!')
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit} >
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required onChange={(event) => { setName(event.target.value) }} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input onChange={(event) => { setEmail(event.target.value) }} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" onChange={(event) => { setPhone(event.target.value) }}></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            
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
export default EmpCreate;