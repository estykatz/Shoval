const courseService=require('../services/courcesServices');

const getCourse=async(req,res)=>{
    try {
        return res.status(200).json({ "course": "beggining" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
const addCourse=(req,res)=>{
    let course=req.body;
    courseService.createCourse(course);
}
module.exports={
    addCourse,getCourse
}