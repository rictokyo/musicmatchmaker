import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div className="dashboard">
            <h1>Welcome, {user.name}!</h1>
            <p>You are logged in as a {user.role}.</p>
            {/* Additional dashboard content can be added here */}
        </div>
    );
};

export default Dashboard;