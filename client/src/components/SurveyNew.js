import React from 'react';
import { useFormik } from "formik";
import { connect } from "react-redux";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useHistory } from "react-router-dom";
import { Button } from "./Button";
import { postSurvey } from "../actions";
import "./SurveyNew.css";


const SurveyNew = (props) => {
    const history = useHistory();

    const validate = values => {
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}[,]{0,1}$/i;
        const inValid = values.recipient.split(",").map(email => email.trim()).filter(email => re.test(email)===false);       
        
    
        const errors  = {};
    
        if(!values.title){
            errors.title="Please enter a survey title";
        }
        if(!values.subject){
            errors.subject ="Email subject is required";
        }
        if(!values.body){
            errors.body ="Email body is required";
        }
        if(!values.recipient){
            errors.recipient ="Please enter recipients";
        } else if(inValid.length){
            errors.recipient = `Invalid emails: ${" "} ${inValid}` ;
        }
     
        return errors
    }
    const formik = useFormik({
        initialValues: {
            title : "",
            subject:"",
            body:"",
            recipient:""
        }, 
        validate,
        onSubmit: async values =>{
           await props.postSurvey(values);
            history.push("/surveys");
        }
        
    })

    return (
        <div className="surveynew">
            <form className="surveynew__form" onSubmit={formik.handleSubmit}>
                <label htmlFor="title" className="surveynew__form-label">Survey Title</label>
                <input 
                    id="title"
                    type="text"
                    {...formik.getFieldProps("title")}
                    className="surveynew__form-input"
                />
                <span className ="surveynew__form-error">{formik.touched.title && formik.errors.title ? formik.errors.title:null}</span>
                <label htmlFor="subject" className="surveynew__form-label">Email Subject</label>
                <input 
                    id="subject"
                    type="text"
                    {...formik.getFieldProps("subject")}
                    className="surveynew__form-input"
                />
                <span className ="surveynew__form-error">{formik.touched.subject && formik.errors.subject ? formik.errors.subject:null}</span>
                <label htmlFor="title" className="surveynew__form-label">Email Body</label>
                <input 
                    id="body"
                    type="text"
                    {...formik.getFieldProps("body")}
                    className="surveynew__form-input"
                />
                <span className ="surveynew__form-error">{formik.touched.body && formik.errors.body ? formik.errors.body:null}</span>
                <label htmlFor="title" className="surveynew__form-label">Email Recipients</label>
                <input 
                    id="recipient"
                    type="text"
                    {...formik.getFieldProps("recipient")}
                    className="surveynew__form-input"
                />
                <span className ="surveynew__form-error">{formik.touched.recipient && formik.errors.recipient ? formik.errors.recipient:null}</span>

                <Button buttonColor="green" buttonStyle="none" type="submit">Send {" "}<MailOutlineIcon /></Button>
            </form>
        </div>
    )
}

export default connect(null, { postSurvey })(SurveyNew)
