const keys = require("../config/keys");
module.exports = (survey) => {
    return (
        `<div style="text-align:center;">
            <h3>Please we would like to hear from you </h3>
             <p>Please answer the question for us :</p>
            <div> ${survey.body} </div>
            <div><a href="${keys.redirectEmail}/api/surveys/${survey._id}/yes">Yes<a/></div>
            <div><a href="${keys.redirectEmail}/api/surveys/${survey._id}/no">No<a/></div>
        </div>`
    )
}
  