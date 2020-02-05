import React, { Component } from 'react';
import Modal from './Modal'


const Family =(Member, obj)=>{
   
    class NewMember extends Component{
        constructor(props){
            super(props);
        
            this.state={
                isShowing: false,
                mydetail:''
            }
        }

        openModalHandler = () => {
            this.setState({isShowing: true});
          }
         
          closeModalHandler = () => {
            this.setState({isShowing: false,mydetail:''});
        }
        
        getMemberData = () => {
            this.setState({
                mydetail:obj
            })
        }

        render() {
            return (
            <div className="border border-success">
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-shed"></div> : null }
                <Modal  className="modal" mydetail={this.state.mydetail}  getMemberData={this.getMemberData} show={this.state.isShowing} close={this.closeModalHandler}  />
                <h3>Hoc Component</h3>
                <button className="btn btn-warning mb-4 mt-4" onClick={this.openModalHandler}>Open Modal</button>
                <Member mydetail={this.state.mydetail} modalbtn={this.openModalHandler} getMemberData={this.getMemberData} />

            </div>
            )    
        }
    }
    
    return NewMember;
}

export default Family;
