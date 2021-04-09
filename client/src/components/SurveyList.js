import React, { useEffect } from 'react';
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import {useHistory} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { fetchSurvey, deleteSurvey} from "../actions";
import "./SurveyList.css";


const SurveyList = (props) => {
    const history = useHistory();
    const {surveys} = props
    useEffect(()=>{
        props.fetchSurvey();
    }, [])

    const removeSurvey = async(id) =>{
        await props.deleteSurvey(id)
        history.push("./");
    }
    return (
        <div className="surveylist">
            {
                surveys.length!==0 &&
                surveys.map(survey=>{
                    return(
                        <div className="surveylist__container" key ={survey._id}>
                            <div className="surveylist__content">
                                <h3>{survey.title}</h3>
                                <p> {survey.body}</p>
                            </div>
                            <div className="surveylist__footer">
                                <p>Yes: {survey.yes}</p>
                                <p>No: {survey.no}</p>
                                <p>Sent: {new Date(survey.date).toLocaleDateString()}</p>
                            </div>
                            <div className="surveylist__icon" onClick={()=>removeSurvey(survey._id)}><IconButton><DeleteIcon /></IconButton></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {surveys : state.surveys};
}
export default connect(mapStateToProps, { fetchSurvey, deleteSurvey })(SurveyList)
