const mongoose = require('mongoose')
const _ = require("lodash");
const {dateDiff} = require('../../../../utils/helpers/dateDiff')
const kue = require("kue")
   ,  queue = kue.createQueue();


module.exports.create = async(user)=>{
    console.log(user);
    console.log("inside the dao impl");
    throw new Error()
}

module.exports.findById = async(id)=>{
    console.log(id);
    console.log("inside the find by id");
    throw new Error()
}

module.exports.updateById = async(id)=>{
    console.log(id);
    console.log("inside the update id dao impl");
    throw new Error()
}

