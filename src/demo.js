import React,{Component} from 'react'

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Qualification:"",
            option:"option1"
        }
        this.handleinput=this.handleinput.bind(this)

    }
    handleinput(e){
        this.setState({
            [e.target.name]:e.target.value

        })

    }
    handleOptionChange(changeEvent){
        // this.setState({
        // Option:changeEvent.target.value
        // })
        // // currentState=this.state
        // // this.setState({
        // //     selectedOption:changeEvent.target.value
        // // })
        let currentState = this.state;
    currentState.selectedOption = changeEvent.target.value;
    this.setState(currentState);

    }
    render(){
        const {Name}=this.state
        return(
            
            
            <div>
           <h3> MyDemo</h3>
           <input name='Name' value={Name} id='name' onChange={this.handleinput} />
           <div className="radio">
<label>
<input type="radio" value="option1"name="option1" checked={this.state.Option === 'option1'} onChange={()=>this.handleOptionChange()} />
Option 1
</label>
</div>
<div className="radio">
<label>
<input type="radio" value="option2"name="option2" checked={this.state.Option === 'option2'} onChange={this.handleOptionChange}/>
Option 2
</label>
</div>
           {Name}
                </div>
        )
    }

} 
export default Demo