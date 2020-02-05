import React, { Component } from "react";
import Family from "./Hoc";

const memDetail = {
  name:'MemberA',
  type: "infant",
  myage: "2months",
  class: "NA"
};
class MemberA extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const xx = { ...this.props.mydetail };
    return (
      <div>
        <section class="jumbotron text-center">
          <div class="container">
            <h2>Increment Counter clicked {this.props.age}  time(s)</h2>
            <button onClick={this.props.double} className="btn btn-primary my-2">
              Get {xx.name} Detail
            </button>
                <h4>Name: {xx.name}, Job: {xx.type}, Age: {xx.myage}, Class: {xx.class}</h4>
          </div>
        </section>
      </div>
    );
  }
}

export default Family(MemberA, memDetail);
