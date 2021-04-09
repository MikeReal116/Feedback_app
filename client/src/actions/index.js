import axios from "axios";


export const fetchUser = () => async dispatch => {
   const response =  await axios.get("/api/currentuser");
   dispatch({type:"FETCH_USER", payload: response.data});
}

export const handleToken = (token) => async dispatch => {
   const response = await axios.post("/api/stripe", token);
   dispatch({type:"FETCH_USER", payload:response.data});
}

export const postSurvey = (values) => async dispatch => {
   const response =  await axios.post("/api/surveys", values);
   dispatch({type:"FETCH_USER", payload:response.data});
}

export const fetchSurvey = () => async dispatch => {
   const response = await axios.get("/api/surveys");
   dispatch({type:"FETCH_SURVEYS", payload:response.data});
}

export const deleteSurvey = (id) => async dispatch => {
   const response = await axios.get(`/api/delete/${id}`);
   dispatch({type:"DELETE_SURVEY", payload:id})
}