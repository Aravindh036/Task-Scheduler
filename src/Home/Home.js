import React,{Component} from 'react';

import './Home.css';
import Today from './Today/Today';

import user from '../assets/account.png';
import arrow from '../assets/arrow-1.png';
class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <nav className="home-nav">
                    <span className="product-name">
                    Task Scheduler
                    </span>       
                    <div className="user-name">
                        <img className="account" src={user} alt=""/>
                        <span>aravindh036@gmail.com</span>
                        <i>&#10148;</i>
                    </div>                 
                </nav>
                <div className="task-container">
                    <div className="task-nav">
                        <div>
                        <i>&#10148;</i>
                        <span>Today's Task</span>
                        </div>
                        <div>
                        <i>&#10148;</i>
                        <span>Pending Task(s)</span>
                        </div>
                        <div>
                        <i>&#10148;</i>
                        <span>Finished Task(s)</span>
                        </div>
                    </div>
                    <div className="nav-topic">
                        <Today/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;