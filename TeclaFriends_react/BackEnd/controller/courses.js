const coursesModel = require('../models/courses')

//obtener todos los cursos
module.exports.getCourse = async (data)=>{
    let result = await coursesModel.courseDo(data)
    return result
}

//insertar nuevos cursos
module.exports.addCourse = async (course) => {
    let result=await coursesModel.cours(course)
    return result;
}
