import React from 'react'
import { GoBell } from "react-icons/go";

function Billing() {
  return (

    <div className='container'>
      <div className="container-fluid">

        <ul className=" navbar navbar-dark  fixed-top">
          <h3>Billing Overview</h3>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
          <li className="nav-link active">
            <a className="btn btn-primary" href="/appointment">Make an Appointment</a>
          </li>
          <li className="nav-link active">
            <a className="btn btn-primary" href="/appointment">Add Patient</a>
          </li>
          <li className="nav-link active">
            <a className="btn btn-primary"><GoBell /></a>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default Billing