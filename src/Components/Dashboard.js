import React, { Component } from "react";
import '../css/Dashboard.css'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
             user:[
                 {id:1, name:"test1", age : "11", gender:"male", email : "test1@gmail.com", phoneNo : "9415346313"},
                 {id:2, name:"test2", age : "12", gender:"male", email : "test2@gmail.com", phoneNo : "9415346313"},
                 {id:3, name:"test3", age : "13", gender:"male", email : "test3@gmail.com", phoneNo : "9415346313"},
                 {id:4, name:"test4", age : "14", gender:"male", email : "test4@gmail.com", phoneNo : "9415346313"},
                 {id:5, name:"test5", age : "15", gender:"male", email : "test5@gmail.com", phoneNo : "9415346313"},
                 {id:6, name:"test6", age : "16", gender:"male", email : "test6@gmail.com", phoneNo : "9415346313"},
                ]
        }
    }
    renderTableData() {
        return this.state.user.map((user, index) => {
           const { id, name, age, gender, email, phoneNo } = user //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{age}</td>                 
                 <td>{email}</td>
                 <td>{phoneNo}</td>
              </tr>
           )
        })
     }
     renderTableHeader() {
        let header = Object.keys(this.state.user[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    render(){        
        return(
            <div>
            <table className='user'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
    }
}
export default Dashboard