import _ from "lodash";

const SurveysReducer = (state = [], action) =>{
    switch(action.type){
        case "FETCH_SURVEYS":
            return action.payload;
        default :
            return state;
    }

}

export default SurveysReducer;