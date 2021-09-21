import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="row navbar-cont">
            <div className="col-md-4 title-nav">
                <h3 className="title">ReaCtRUD</h3>
            </div>
            <div className="col-md-8 buttons-container">
                <Link to="/" className="btn btn-outline-danger btn-color">Dashboard</Link>
                <Link to="/users" className="btn btn-outline-danger btn-color">Users</Link>
                <Link to="/create-user" className="btn btn-outline-danger btn-color">Create User</Link>
            </div>
        </nav>
    )
}

export default Navbar