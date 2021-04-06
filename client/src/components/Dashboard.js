import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__icon">
                <Link to ="/survey/new"><IconButton> <AddIcon className="dashboard__icon-add" /></IconButton></Link>
            </div>
        </div>
    )
}

export default Dashboard
