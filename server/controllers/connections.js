const Connection = require('../models/Connection')

const getAllConnections = async (req,res) => {
    try {
        const allConnections = await Connection.find({})
        res.status(200).json(allConnections)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createConnection = async (req,res) => {
    try {
        const connection = await Connection.create(req.body)
        res.status(201).json(connection)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteConnection = async (req,res) => {
    try {
        const {id:ConnectionID} = req.params;
        const connection = await Connection.findOneAndDelete({_id:ConnectionID})
        if(!connection) {return res.status(404).json({msg:"No Connection"})}
        res.status(200).json({connection})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateConnection = async (req,res) => {
    try {
        const {id:ConnectionID} = req.params;
        const connection = await Connection.findByIdAndUpdate(ConnectionID,req.body,{new:true,runValidators:true})
        !connection ? res.status(404).json({msg:"No task with id"}) : res.status(200).json({connection})
    } catch (error) {
        res.status(200).json({msg:error})
    }
}



module.exports = {getAllConnections, createConnection, deleteConnection, updateConnection}

