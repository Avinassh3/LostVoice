import React, { Fragment, useState, Component } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios, { post } from 'axios';

class CheckImage extends Component{

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      Accuracy:null,
      sign:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      this.setState({
                    sign:response.data.sign})
      console.log(this.state);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://127.0.0.1:5000/api/image';
    const formData = new FormData();
    formData.append('image',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (


<div>
      
      <div className="container-fluid">
    <div className="row"  >
  
    <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'auto'}}>
    <h5 className="card-title text-center">Listen feature</h5>
    <p className="card-text text-center"> Supported jpg,png,jpeg files only</p>




      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} className='btn btn-block btn-secondary'/>
        
        <button type="submit" className="btn btn-block btn-secondary ">Upload</button>
      </form>
     <br></br>
      { this.state.sign ?  (
      <div className="row">
    <div className="container">
<h4>Sign Predicted : {this.state.sign}</h4>

    </div>
      </div>): null}
      </div>
      </div>
      </div>
      </div>
   )
  }
}
export default CheckImage;