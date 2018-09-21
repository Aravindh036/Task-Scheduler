import React,{Component} from 'react';

import '../Signup.css';

import user from '../../assets/user.png';
import password from '../../assets/password.png';
import email from '../../assets/email.png';
class Signup extends Component{
    render(){
        return(
            <div className="signup">
                <div className="form-container">
                    <span>SIGN UP (STAFF)</span>
                    <div className="container--inner">
                        <div className="enroll-no icon">
                            <img src={user} alt=""/>
                            <input type="text" placeholder="Staff Id"/>
                        </div>
                        <div className="email icon">
                            <img src={email} alt=""/>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="password icon">
                            <img src={password} alt=""/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;