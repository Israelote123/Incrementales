const coursesController = require("../controller/courses");
const expect =require ("chai").expect;

describe("testing coursesController",()=>{

  describe("check course function",()=>{
    it("check return type",async ()=>{
      let result=await coursesController.getCourse ("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })

});