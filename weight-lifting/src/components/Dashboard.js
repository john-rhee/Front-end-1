import React, { Component } from 'react';
import WorkOutList from './WorkOutList';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <WorkOutList/>
                    </div>
                    {/* <div className=" col s12 m5 offset-m1">
                    </div> */}
                </div>
            </div>
        )
    }
}
export default Dashboard