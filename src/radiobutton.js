import React, { Component } from 'react';
class RadioButton extends Component {
    constructor(props){
        super(props);
        this.state={
            Option:'option1'
        }
        //.handleinput=this.handleinput.bind(this)

    }
    handleOptionChange(changeEvent){
        this.setState({
        Option:changeEvent.target.value
        })
        // currentState=this.state
        // this.setState({
        //     selectedOption:changeEvent.target.value
        // })
    //     let currentState = this.state;
    // currentState.selectedOption = changeEvent.target.value;
    // this.setState(currentState);

    }
        handleFormSubmit(e) {
        e.preventDefault();
        
        console.log('You have selected:', this.state.Option);
        }

    render() {
          return (
        <div>
<div className="container">
<div className="row">
<div className="col-sm-12">

<form onSubmit={this.handleFormSubmit}>
<div className="radio">
<label>
<input type="radio" value="option1"name="option1" checked={this.state.Option === 'option1'} onChange={this.handleOptionChange} />
Option 1
</label>
</div>
<div className="radio">
<label>
<input type="radio" value="option2"name="option2" checked={this.state.Option === 'option2'} onChange={this.handleOptionChange}/>
Option 2
</label>
</div>
<div className="radio">
<label>
<input type="radio" value="option3"name="option3" checked={this.state.Option === 'option3'} onChange={this.handleOptionChange}/>
Option 3
</label>
</div>
<button className="btn btn-default" type="submit">Save</button>
</form>

</div>
</div>
</div>
          
        </div>
      );
    }
  }
  
  export default RadioButton;
// var React = require('react');

// var Application = React.createClass({

// getInitialState: function () {
// return {
// selectedOption: 'option1'
// };
// },

// handleOptionChange: function (changeEvent) {
// this.setState({
// selectedOption: changeEvent.target.value
// });
// },

// handleFormSubmit: function (formSubmitEvent) {
// formSubmitEvent.preventDefault();

// console.log('You have selected:', this.state.selectedOption);
// },

// render: function () {
// return (
// <div className="container">
// <div className="row">
// <div className="col-sm-12">

// <form onSubmit={this.handleFormSubmit}>
// <div className="radio">
// <label>
// <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
// Option 1
// </label>
// </div>
// <div className="radio">
// <label>
// <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
// Option 2
// </label>
// </div>
// <div className="radio">
// <label>
// <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
// Option 3
// </label>
// </div>
// <button className="btn btn-default" type="submit">Save</button>
// </form>

// </div>
// </div>
// </div>
// );
// }
// });

// module.exports = Application;