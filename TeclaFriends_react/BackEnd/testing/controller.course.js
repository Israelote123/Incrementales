const { DESCRIBE } = require('sequelize/dist/lib/query-types');
const userController = require('../controller/users')
const expect =require ("chai").expect;

describe("testing courseController",()=>{
    describe("check course function",()=>{
       it ("chek return value: ", ()=>{
           result =  userController.suma (3+7)
           expect(result).to.equal(10)
       })
    }
    )
});



/*printCourse = async ()=>{
    let result = await userController.getCourse ("jantonios44@hotmail.com")
    console.log(result)
    //return result
}*/
