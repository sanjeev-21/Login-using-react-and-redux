import React, { Component } from "react";
import appiness from '../Assets/appiness.png'
import MobIcon from '../Assets/mob.jpg';
import PasswordIcon from '../Assets/PasswordIcon.jpeg';
import '../css/Login.css'
import { connect } from 'react-redux';
import { login } from '../Redux/Login-reducer'
import auth from "../Common/Auth";

class LoginPage extends Component {
    constructor() {
        super()
        this.state={}
    }
   
handleSubmit=(e)=>{
    var errorMsg
        e.preventDefault();
        let { username, password }= this.state;
        console.log(username,password)
        this.props.login(username, password)
}
render(){
    let { isLogginSuccess, logginError} = this.props
        return(
            <div className="main-div">
            <div className="row ">            
                <div className="col-md-6 col-lg-6 col-sm-6">
                    <img className="login-img" src={appiness}/>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 input-grp">
                    <h3 className="hinfo"> <b>SIGN IN</b></h3>
                    <form >
                        <div className="input-container">
                            <img className="login-icons" src={MobIcon} />
                            <input className="input-field" type="text"  placeholder="User Name / Mobile No" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />

                        </div>
                        <div className="input-container">
                            <img className="login-icons" src={PasswordIcon} />
                            <input className="input-field" type="password" placeholder="Password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>
                        {isLogginSuccess &&auth.protectedRouting(() => { this.props.history.push('/dashboard')})}
                        {logginError && <div className="errorinfo">Invalid Username or Password</div>}
                        <div>
                            <button onClick={this.handleSubmit} type="button" className="btn btn-primary save-btn">Sign In</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        isLogginSuccess: state.isLogginSuccess,
        logginError: state.logginError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        login:(username, password)=>dispatch(login(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
 