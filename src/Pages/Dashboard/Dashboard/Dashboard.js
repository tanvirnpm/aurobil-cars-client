import React from 'react';
import DashboardMenu from './DashboardMenu';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h1>Welcome! tanvir.</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;