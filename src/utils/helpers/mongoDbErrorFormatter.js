//formats the duplicate error message sent by mongoDB.
module.exports.duplicateErrorMessageFormatter = (message)=>{
    const messagePolish = Object.entries(message)[0][0]
    return `${messagePolish} already exists!`
}