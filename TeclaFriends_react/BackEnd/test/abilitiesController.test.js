const abilitiesController = require("../controller/abilities");
const expect =require ("chai").expect;

describe("testing abilitiesController",()=>{

  describe("check datos function",()=>{
    it("check return type",async ()=>{
      let result=await abilitiesController. getAbility("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })

});