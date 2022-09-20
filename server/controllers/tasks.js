const Task = require('../models/Task')


const getAllTasks = async (req,res) => {
    try{
        const allTasks = await Task.find({})
        res.status(200).json({allTasks})
    } catch(error){
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const getT = await Task.findById(taskID)
        if (!getT){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(201).json({getT})
    }catch(error){
        res.status(201).json({msg:error})
    }
}

const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = async(req,res)=>{
    try{
        const {id:TaskID} = req.params;
        const task = await Task.findOneAndDelete({_id:TaskID});
        if (!task) {return res.status(404).json({msg:"No Task"})}
        res.status(200).json({task});
    } catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate(taskID,req.body,{new:true,runValidators:true})
        if (!task){
            return res.status(404).json({msg:"No task with id"})
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error})
    }
}
const checkTask = async ( req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findById(taskID);
        if (!task) { return res.status(404).json({msg:"Not task with id"})}
        const updatedPost = await postMessage.findByIdAndUpdate(taskID, {completed:!task.completed}, {new:true,runValidators:true});
        res.json(updatedPost);
        
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    createTask,getAllTasks,deleteTask,updateTask,getTask,checkTask
}