import React from 'react'

const Dashboard = () => {
  return (
    <div class="container">

      <div className="row">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
              </div>
              <h4 className="text-center"> Welcome to our Dashboard</h4>
            </div>
            <p className="text-center"> kashyaprampratap8@gmail.com</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-hospital-o"></i>
              </div>
              <h4 className="mr-5">Hospital</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-stethoscope" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Doctor</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-ambulance" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Ambulance</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-medkit" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Medicine</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <h4 className="mr-5">Feedback</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-tint" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Blood bank</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Patients</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="card-body-icon">
                <i class="fa fa-flask" aria-hidden="true"></i>
              </div>
              <h4 className="mr-5">Labs</h4>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="#">
              <span className="float-left">View Details</span>
            </a>
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  )
}

export default Dashboard
