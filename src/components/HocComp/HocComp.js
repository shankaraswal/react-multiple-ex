import React, { Component } from 'react';

const HocComp = (Member, incBy=1 )=>{

  class NewMember extends Component {
    constructor(props) { 
      super(props);
      this.state = {
        count: 0
      }
    };
  
    clickCount = () => {
      console.log('clicked')
      this.setState ({
        count: this.state.count + incBy.icount
      });
    };

    

    render() {
      console.log(incBy)
      return (
       
        <Member
          incby={incBy.icount}
          name={'Member '+incBy.cname}
          count={this.state.count}
          clickCount={this.clickCount}
        />
      );
    }
    
 } 
 return NewMember;
}

export default HocComp;
