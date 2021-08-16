

module.exports.create = async(user, res)=>{
    return res.send("inside the login impl")
}

module.exports.login = async(user, res)=>{
    return res.send("inside the login impl")
}

module.exports.findById = async(id, res)=>{
    return res.send("inside the find by id impl")
}

module.exports.updateById = async(req, res)=>{
    return res.send("inside the update by id dao impl")
}
