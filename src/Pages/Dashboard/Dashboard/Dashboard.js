import React from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardMenu from './DashboardMenu';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h1>Welcome! to {user.name}.</h1>
                    <h4>Your are a {user.user && <span className="badge bg-info">Member</span>} {user.admin && <span className="badge bg-info">Admin</span>} of our website.</h4>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;