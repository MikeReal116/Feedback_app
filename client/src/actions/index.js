import axios from "axios";

export const fetchUser = () => async dispatch => {
   const response =  await axios.get("/api/currentuser");
   dispatch({type:"FETCH_USER", payload: response.data});
}