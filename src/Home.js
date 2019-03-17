import React, { Component } from 'react';
import {browserHistory} from 'react-router';
// import Aboutus from './aboutus';
class Home extends Component {
  
  constructor(){
    super();
    this.state={
      fname:"",
      myName:'',
      Qualification:"",
      job:""
    }
    // this.name=this.name.bind(this);
    // this.Qualification=this.Qualification.bind(this)
    // this.job=this.job.bind(this)
     this.funIns=this.funIns.bind(this)
  this.inputHandle=this.inputHandle.bind(this); 
  
  }
  inputHandle(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  //  name(e){
  //    this.setState({name:e.target.value})
     
  //  }
  //  Qualification(e){
  //   this.setState({Qualification:e.target.value})
  // }
  // job(e){
  //   this.setState({job:e.target.value})
  // }
  funIns(){
    let obj={fname:this.state.fname,qualification:this.state.Qualification,job:this.state.job}
  //  this.state.fname="",
  //  this.state.Qualification="",
  //  this.state.job=""
    alert(obj.fname);
    alert(obj.qualification);
    alert(obj.job);
}

onnavigateabout(){
  browserHistory.push('/demo') ;
  document.location.reload()
}
// axios(){
//   axios.get(''http:lo/, {
//     headers: {
//       Authorization: 
//     }
//   })
//     .then((res) => {
//       console.log(res)
      
//     .catch(function (e) {
//       console.log('ERROR ', e);
//     })


// }
  render() {
    return (
     
      
      <div class="container">
      <div class="row justify-content-center mt-5">
      <div class="register p-5">
      <h1 class="text-center">Details</h1>
      <p>{this.state.myName}</p>
      <h1>{this.state.fname}</h1>
      <table>
        homedata={this.funIns }
      </table>
      <h4>Enter Name</h4>
      <input type="text" class="form-control" name="fname" value={this.state.fname} onChange={this.inputHandle}></input>
      <br></br>
      <h4>Enter Qualification</h4>
      <input type="text" class="form-control" name="Qualification" value={this.state.qualification} onChange={this.inputHandle}></input>
      <br></br>
      <h4>job</h4>
      <input type="text" class="form-control" name="job" value={this.state.job} onChange={this.inputHandle}></input>
      
      <button class="btn btn-success float-right" onClick={this.funIns}>Insert</button>
      <button class="btn btn-success float-right" onClick={this.onnavigateabout}>data</button>
      <h1>{this.state.fname}</h1>
      {/* <Aboutus name={DataTransferItem}myName/> */}
      </div>
      </div>
      
      </div>
    )

      }
      }

  //ReactDOM.render(<Home headerprop={this.state.obj}/>,document.getElementById('Home'));


export default Home;