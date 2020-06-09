import React, { Component } from 'react'

class Speak extends Component {

  constructor(props)
  {
    super(props);
    this.state={word:'',message:false,image:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.word);
    const data={word:this.state.word}
    //console.log(data);

    const options={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }

    event.preventDefault();
    fetch('http://localhost:5000/api/gif',options)
    .then(res=>res.blob()).then(
      images=>{
        const outside=URL.createObjectURL(images);
        this.setState({image:outside});
        this.setState({message:true});
        //console.log(outside)
      }
      ).catch(err=>{alert("request can't be processed please try later")})

  }






  render(){
  return (
    

    <div className="container-fluid">
    <div className="row"  >
  
    <div className="col-sm-6 border border-white" style={{padding:'2rem',margin:'auto'}}>
    <h5 className="card-title text-center">Speak feature</h5>
    <p className="card-text text-center">
    <form onSubmit={this.handleSubmit}>
  <div className="form-group">
  <label>Enter Text for which Sign Language has to be generated</label>
  <input type="text" className="form-control" id="word" required placeholder="Enter Text" 
  onChange={this.handleChange}/>
  </div>
  <button type="submit" className="btn btn-outline-light btn-lg  display-4">Submit</button>
  
  </form>
  <br/>
  </p>

  
    <center>
    { this.state.message ?
    <img  src={this.state.image} style={{width:300,height:300}} alt='Loading..'/>
    : null
    }
    </center>
    </div>
  </div>
  </div>
  );
}
};

export default Speak;