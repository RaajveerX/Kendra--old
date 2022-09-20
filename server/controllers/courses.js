const Course = require('../models/Course')

const getAllCourses = async (req,res) => {
    try {
        const allCourses = await Course.find({})
        res.status(200).json({allCourses})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createCourse = async (req,res) => {
    try {
        const course = await Course.create(req.body)
        res.status(201).json(course)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteCourse = async (req,res) => {
    try {
        const {id:CourseID} = req.params;
        const course = await Course.findOneAndDelete({_id:CourseID})
        if(!course) {return res.status(404).json({msg:"No Course"})}
        res.status(200).json({course})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateCourse = async (req,res) => {
    try {
        const {id:CourseID} = req.params;
        const course = await Course.findByIdAndUpdate(CourseID,req.body,{new:true,runValidators:true})
        !course ? res.status(404).json({msg:"No task with id"}) : res.status(200).json({course})
    } catch (error) {
        res.status(200).json({msg:error})
    }
}



module.exports = {getAllCourses, createCourse, deleteCourse, updateCourse}

