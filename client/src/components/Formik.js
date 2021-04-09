import React from 'react';
import SurveyNew from "./SurveyNew";

const Formik = () => {
    const validate = values => {
        const re = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
        const inValid = values.recipient.split(",").map(email => email.trim()).filter(email => re.test(email)===false);       
        
    
        const errors  = {};
    
        if(!values.title){
            error.title="Please enter a survey title"
        }
        if(!values.subject){
            error.title ="Email title is required"
        }
        if(!values.body){
            error.body ="Email body is required"
        }
        if(!values.recipient){
            error.body ="Please enter recipient" 
        }
     
        return errors
    }

    const formik = useFormik({
        initialValues: {
            title : "",
            subject:"",
            body:"",
            recipient:""
        }
        
    })
    return (
        <div>
            <SurveyNew />
        </div>
    )
}

export default Formik
