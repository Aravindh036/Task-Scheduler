import React,{Component} from 'react';

import './Pending.css';
class Pending extends Component{
    render(){
        return(
            <div className="today-task">
                <span className="nav-title">Today's Task</span>
                <div className="task-list">
                    <div className="task-item">
                        <div className="flex">
                           <div>
                                <div className="circle"></div>
                                <span className="task-topic">JS</span>
                           </div>
                            <span className="task-status">Finished ?</span>
                        </div>
                        <div className="desp">
                            <div className="horizontal-border"></div>
                            <span>Started learning JS</span>
                        </div>
                    </div>
                    <div className="task-item">
                        <div className="flex">
                           <div>
                                <div className="circle"></div>
                                <span className="task-topic">JS</span>
                           </div>
                            <span className="task-status">Finished ?</span>
                        </div>
                        <div className="desp">
                            <div className="horizontal-border"></div>
                            <span>Started learning JS</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pending;