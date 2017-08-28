import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  handleTextChange = (event)=>{
    this.setState({poem: event.target.value}, this.evaluateValid)
  };

  evaluateValid = ()=>{
    var splitPoem = this.state.poem.split('\n')


    if (splitPoem.length === 3) {
      var lineOne = splitPoem[0].trim()
      var lineTwo = splitPoem[1].trim()
      var lineThree = splitPoem[2].trim()



      if(lineOne.split(" ").length === 5 && 
         lineTwo.split(" ").length === 3 && 
         lineThree.split(" ").length === 5) {
        this.setState({valid: true})
      } else {
        this.setState({valid: false})
      }
    } else {
      this.setState({valid: false})
    }

  }


  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60"
          value={this.state.poem}
          onChange={this.handleTextChange}
        />

        {this.state.valid ? null : (<div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>)}
        
      </div>
    );
  }
}

export default PoemWriter;