const keys = require("../config/keys");
module.exports = (body) => {
    return (
        `<div style="text-align:center;">
            <h3>Please we would like to hear from you </h3>
             <p>Please answer the question for us :</p>
            <div> ${body} </div>
            <div><a href="${keys.redirectEmail}/api/feedback">Yes<a/></div>
            <div><a href="${keys.redirectEmail}/api/feedback">No<a/></div>
        </div>`
    )
}
  