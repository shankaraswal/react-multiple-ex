import React, { Component } from "react";
import Family from "./Hoc";
import axios from 'axios';

const memDetail = {
  name:'MemberB',
  type: "Student",
  myage: "6 years",
  class: "2nd"
};
class MemberB extends Component {
  constructor(props) {
    super(props);
    
  }

  getData = async () => { 
    try {
      const posts = axios.get('https://jsonplaceholder.typicode.com/post');
      const users = axios.get('https://jsonplaceholder.typicode.com/users');
    
      const data1 = await posts;
      const data2 = await users;
    }
    catch(err){ 
      
  
    }
  }


  componentDidMount() { 
    this.getData();
    
  }

  render() {
    const xx = { ...this.props.mydetail };
    return (
      <div className="border border-danger">
        <h2>i am a {xx.name} component</h2>
        <section className="jumbotron text-center">
          <button onClick={this.props.getMemberData} className="btn btn-primary my-2">Get {xx.name} Detail</button>
          <div className="container">
            <h4>Name: {xx.name}, Job: {xx.type}, Age: {xx.myage}, Class: {xx.class}</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default Family(MemberB, memDetail);
