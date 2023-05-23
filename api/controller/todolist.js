const List = require('../models/list');


const createlist = async(req,res)=>{
    const list = await List.create({...req.body});
    return res.status(200).json(list);
}

const getalllist = async(req,res)=>{
   const list = await List.find().sort({"textarea": 1});
   return res.status(200).json(list);
}  

const updatelist = async(req,res)=>{
    const {params:{id}} = req;
    const list = await List.findByIdAndUpdate({_id:id},req.body);
    return res.status(200).json(list);

}

const deletelist = async(req,res)=>{
    const {params:{id}} = req;
    const list = await List.findByIdAndDelete({_id:id});
    return res.status(200).send();
}

const singlelist = async(req,res)=>{
    const {params:{id}} = req;
    const list = await List.findById({_id:id});
    return res.status(200).json(list);
}
module.exports = {createlist,getalllist,updatelist,deletelist,singlelist};