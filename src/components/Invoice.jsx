import React from 'react'


const patients = () => {

}

const Invoice = () => {
  return (
    <div className="container">
      <div className="card" >
        <div className="card-body mx-4">
          <a className="text-right" hrf=""> Print</a>

          <div className="container">
            <h4 className="text-center"> Billing Details </h4>
            <hr />
            <div className="row">
              <ul className="list-unstyled">
                <li className="text-black">Tom cruise</li>
                <li className="text-muted mt-1"><span className="text-black">Invoice</span> #12345</li>
                <li className="text-black mt-1">April 17 2021</li>
              </ul>
              <hr />
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sr.no</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Consultation</td>
                  <td> 500</td>
                  <td>1</td>
                  <td>500</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>X-ray</td>
                  <td>1500</td>
                  <td>2</td>
                  <td>3000</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Ultrasound</td>
                  <td>2000</td>
                  <td>1</td>
                  <td>2000</td>

                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <th scope="col">GST</th>
                  <th scope="col">246</th>

                </tr>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <th scope="col">Total Amout</th>
                  <th scope="col">5,746</th>

                </tr>

              </tbody>
            </table>
          </div>
          <div class="text-center">
            <p>Thank you ........ </p>
            <a><u class="text-info">View in browser</u></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice