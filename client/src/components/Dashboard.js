import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { connect } from "react-redux"
import { IconButton } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";
import "./Dashboard.css";

const Dashboard = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

      
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div className="dashboard">
            <SurveyList />
            <div className="dashboard__icon" onClick={handleClick}>
                <Link to ={props.credit&&props.credit.credits>0?"/survey/new":"/surveys"}><IconButton> <AddIcon className="dashboard__icon-add" /></IconButton></Link>
            </div>
            {props.credit && props.credit.credits<=0 &&<Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <div className="dashboard__error">Please Update your credit.</div>
            </Popover>}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {credit:state.auth}
}
export default connect(mapStateToProps)(Dashboard)
