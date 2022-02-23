const feedbackModel = require('../models/feedback')

//formulario feedback
module.exports.addFeedback = async (data) => {
    let result=await userModel.feedback(data)
    return result;
}

//obtener feedback
module.exports.getFeedback= async (data)=>{
    let result = await userModel.feedbackGet(data)
    return result
}