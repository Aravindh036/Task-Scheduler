import React,{Component} from 'react';
import user from '../../assets/account.png';

import './AddTask.css';
class AddTask extends Component{
    toggler=()=>{
        document.getElementById("options-id").classList.toggle("options-show");
    }
    togglerOut=()=>{
        document.getElementById("options-id").classList.toggle("options-show");
        console.log("hello");
    }
    render(){
        return(
            <div className="add-task" >
                <nav className="home-nav">
                    <span className="product-name">
                    Task Scheduler
                    </span>       
                    <div className="user-name">
                        <img className="account" src={user} alt=""/>
                        <span>aravindh036@gmail.com</span>
                        <i onClick={this.toggler}>&#10148;</i>
                    </div>
                    <div className="options" id="options-id">
                        <p>Logout</p>
                    </div>                 
                </nav>
                <div className="close">
                </div>
                <div className="add-task-container">
                   <div>
                        <span>Today's task details</span>
                        <div className="task-title">
                            <label>Task Title</label>
                            <input type="text" />
                        </div>
                        <div className="task-description">
                            <label>Description</label>
                            <input type="text" />
                        </div>
                        <div className="button-block">
                            <button>save</button>
                            <button>cancel</button>
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default AddTask;