const feedbackModel = require('../models/feedback')

//formulario feedback
module.exports.addFeedback = async (data) => {
    let result=await feedbackModel.feedback(data)
    return result;
}

//obtener feedback
module.exports.getFeedback= async (data)=>{
    let result = await feedbackModel.feedbackGet(data)
    return result
}