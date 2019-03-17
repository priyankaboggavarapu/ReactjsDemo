import React,{Component} from 'react'
import axios from 'axios'
import {common} from './data'
//import {sample} from './images/sample.png'
class Sample extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            Qualification:"",
            selectedOption:"",
            country:"",
            salary_range:"",
            salary:[],
            countryBasedSalary:[],
gender:"",
            checked:false,
            checked1:false,
            checked2:false
        }
this.handleChange=this.handleChange.bind(this);
this.handleCountryChange=this.handleCountryChange.bind(this);

// this.handleChange1=this.handleChange1.bind(this);
// this.handleChange2=this.handleChange2.bind(this);


    }
    componentDidMount(){
        this.getdata()
        let Salary=common.salary
        this.setState({
            salary:Salary
        })

    }

    getdata(){
        // let obj= {'username':this.state.username,'password':this.state.password}
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log('gedata.....',res)
            let profileData=res.data
            
            console.log("profileData",profileData)

            
        })
        .catch(function (e){
            console.log('error',e)
        })
        // axios.post('https://jsonplaceholder.typicode.com/users',this.obj
        // )
        // .then((res)=>{
        //     console.log('gedata.....',res)
        // })
        // .catch(function (e){
        //     console.log('error',e)
        // })
    }
    handleChange(e){
    
        
        this.setState({
            [e.target.name]:e.target.value,
            checked:e.target.checked,
            checked1:e.target.checked,

            checked2:e.target.checked
        })
       
    }
    handleCountryChange(e){
        let currentState=this.state;
        let countrySalary = e.target.value;
        //india
        currentState.country=e.target.value;
        this.loadSalaryrange(countrySalary,currentState)
        this.setState(
        currentState)
    }
    loadSalaryrange(countrySalary,currentState){
        var countryBasedSalary=this.state.salary.filter(function(salarydata){
            return salarydata.s_country == countrySalary
        });
        if(countryBasedSalary){
            
            currentState.countryBasedSalary=countryBasedSalary.map(x =>{
                
                let salary_range = x.salary_range;
                console.log('salary_range',salary_range)
                return salary_range
            })[0]
    
        }
        console.log('currentstate',currentState)


    }
    handleChange1(e){
        this.setState({
            checked1:e.target.checked,
            
        })
    }
    handleChange2(e){
        this.setState({
            checked2:e.target.checked,
            
        })
    }

    // handleOptionChange(changeEvent) {
    //     let x = this.state;
    //    // x.selectedOption=changeEvent.target.value;
    //     this.setState({
    //         selectedOption: changeEvent.target.value
    //     });
    //     }
    render(){
      //  const {name,Qualification,selectedOption,checked} =this.state
        return(
            <div>

                Name:
                <input type= "text" value={this.state.name} name='name'id="name" onChange={this.handleChange}></input><br></br>
                Oualification:
                {/* <input type= "text" value={this.state.Qualification} name="Qulification" id="Qulification" onChange={this.handleChange}></input><br></br> */}
                <input type="text"  name="Qualification" value={this.state.Qualification} onChange={this.handleChange}></input>

                Gender:
                <input type= "radio" value='option1' checked={this.state.selectedOption === 'option1'} name="selectedOption" onChange={this.handleChange}></input>
                <input type= "radio" value='option2' checked={this.state.selectedOption === 'option2'} name="selectedOption" onChange={this.handleChange}></input><br></br>

Isverified:

                <input type= "checkbox" checked={this.state.checked} onChange={this.handleChange} ></input>
                <input type= "checkbox" checked={this.state.checked1} onChange={this.handleChange} name='checked1'value={this.state.checked1} ></input>


                <input type= "checkbox" checked={this.state.checked2} onChange={this.handleChange}name='checked'value={this.state.checked2} ></input>

<select name="country" value={this.state.country} onChange={this.handleCountryChange}id="country">
<option value="">select country</option>
<option value="INDIA">INDIA</option>
<option value="UNITED STATES">UNITED STATES</option>

</select>
<select name="salary_range" value={this.state.salary_range} onChange={this.handleChange} id="salary_range">
<option value="">select salary_range</option>
{this.state.countryBasedSalary.map((data)=>
<option value={data.s_id}>{data.s_text}</option>
)}



</select>


<select name="gender" value={this.state.gender} onChange={this.handleChange}id="gender">
<option value="">select Gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>

</select>
{this.state.gender == "Male"?
<div>
    <img  src="https://images.news18.com/ibnlive/uploads/2017/03/pawankalyan-875.gif"></img>

    <img src="https://images.news18.com/ibnlive/uploads/2017/03/pawankalyan-875.gif"></img>

    <img src="https://images.news18.com/ibnlive/uploads/2017/03/pawankalyan-875.gif"></img>

</div>
:null
}

{this.state.gender == "Female" ?
<div>
    <img src='https://www.mwallpapers.com/photos/celebrities/anupama-parameswaran/anupama-parameswaran-hd-images-bwctbf.jpg'></img>

    <img src='https://www.mwallpapers.com/photos/celebrities/anupama-parameswaran/anupama-parameswaran-hd-images-bwctbf.jpg'></img>

    <img src='https://www.mwallpapers.com/photos/celebrities/anupama-parameswaran/anupama-parameswaran-hd-images-bwctbf.jpg'></img>
</div>
:null}



            </div>
        )
    }
}
export default Sample