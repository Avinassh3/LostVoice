import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class NotFound extends Component {

  render(){
  return (
    <div className="container-fluid">

  <div className="row border-0 " >
  <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'auto'}}>
    <h4 className="card-title text-center">Page Not Found</h4>
    <p className="card-text text-center">
    
  <div className="">
  <h4>404 ERROR PAGE NOT FOUND</h4>
  </div>
  <Link to="/"> 
  <button type="submit" className="btn btn-outline-light btn-lg  display-4">Back to Home</button>
  </Link>
  </p>
  </div>
  </div>
  </div>
  );
}
};

export default NotFound;