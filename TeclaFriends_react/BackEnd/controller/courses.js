const coursesModel = require('../models/courses')

//obtener todos los cursos
module.exports.getCourse = async (data)=>{
    let result = await userModel.courseDo(data)
    return result
}

//insertar nuevos cursos
module.exports.addCourse = async (course) => {
    let result=await userModel.cours(course)
    return result;
}
