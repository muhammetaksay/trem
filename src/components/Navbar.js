import React from "react";



class Navbar extends React.Component{
    render() {
      return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="addcustomer" className="nav-link">Add Customer</a></li>
                <li className="nav-item"><a href="list" className="nav-link active">Customers</a></li>
            </ul>
            </header>
        </div>
      )
    }
}
  
export default Navbar;