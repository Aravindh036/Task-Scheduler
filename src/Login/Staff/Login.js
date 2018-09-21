import React,{Component} from 'react';

import '../Login.css';

import user from '../../assets/user.png';
import password from '../../assets/password.png';
class Login extends Component{
    render(){
        return(
            <div className="login">
                <div className="form-container">
                    <span>SIGN IN (STAFF)</span>
                    <div className="container--inner">
                        <div className="enroll-no icon">
                            <img src={user} alt=""/>
                            <input type="text" placeholder="Staff Id"/>
                        </div>
                        <div className="password icon">
                            <img src={password} alt=""/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;