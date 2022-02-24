const friendsController = require("../controller/friends");
const expect =require ("chai").expect;

describe("testing friendsController",()=>{

  describe("check friends function",()=>{
    it("check return type",async ()=>{
      let result=await friendsController.getFriends ("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })   
  })

});