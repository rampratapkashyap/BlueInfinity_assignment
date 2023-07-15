import React, { useState, useEffect } from 'react'
import Patient from './Patient';
// import Billiing from './Billing';


const getDatafromLS = () => {
  const data = localStorage.getItem('patients');
  console.log(data)
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const Appointment = () => {

  const [patients, setpatients] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');

  const handleAddPatientSubmit = (e) => {
    e.preventDefault();
    let patient = {
      name,
      age,
      mobile
    }
    setpatients([...patients, patient]);
    setName('');
    setAge('');
    setMobile('');
  }

  const deletePatient = (name) => {
    const filteredPatients = patients.filter((element, index) => {
      return element.name !== name
    })
    setpatients(filteredPatients);
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients])

  return (
    <div className='wrapper'>
      <h1>Make Appointment</h1><hr />
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddPatientSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Age</label>
            <input type="number" className='form-control' required
              onChange={(e) => setAge(e.target.value)} value={age}></input>
            <br></br>
            <label>Mobile</label>
            <input type="number" className='form-control' required
              onChange={(e) => setMobile(e.target.value)} value={mobile}></input>
            <br></br>
            <button type="submit" className='btn btn-primary btn-md'>
              Submit
            </button>
          </form>
        </div>

        <div className='view-container'>
          {patients.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mobile</th>
                    <th>Action</th>
                    <th>Invoice</th>

                  </tr>
                </thead>
                <tbody>
                  <Patient patients={patients} deletePatient={deletePatient} />
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
              onClick={() => setpatients([])}> Remove All </button>
          </>}
          {patients.length < 1 && <div>No patients are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default Appointment
