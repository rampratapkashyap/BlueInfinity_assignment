import React from 'react';
import { BiGridAlt, BiWalletAlt, BiFirstAid, BiEdit } from "react-icons/bi";

function Sidebar() {
  return (
    <div>
      <html>
        <head>
        </head>        
        <body><div className="area"></div><nav className="main-menu">
          <ul>
            <li className="has-subnav">
              <a href="/dashboard">
                <i className="fa fa- fa-4x"><BiGridAlt /></i>
                <span className="nav-text">
                  Dashboard
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a href="patient">
                <i className="fa fa- fa-2x"><BiFirstAid /></i>
                <span className="nav-text">
                  Patient
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a href="/appointment">
                <i className="fa fa- fa-2x"><BiEdit /></i>
                <span className="nav-text">
                  Appointment
                </span>
              </a>

            </li>
            <li className="has-subnav">
              <a href="/billing">
                <i className="fa fa- fa-2x"><BiWalletAlt /></i>
                <span className="nav-text">
                  Billing
                </span>
              </a>
              
            </li>
          </ul>

          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
        </body>
      </html>
    </div>
  )
}

export default Sidebar
