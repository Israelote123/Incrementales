const userController = require("../controller/users");
const expect =require ("chai").expect;

describe("testing userController",()=>{
 
  describe("check datos function",()=>{
    it("check return type",async ()=>{
      let result=await userController.getDatos("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })

  //cambiar el ${process.env.ROWS} de la funcion login en models/users, por la variable global de .env, para pasar el test
  describe("Check login function", () => {
    it("Check return type ", async () => {
      let dataUser = {
        mail: "bob68@gmail.com",
        password: "24681012ja",
      };
      let result = await userController.accessLogin(dataUser);
      expect(result).be.a('object');
      //should(result).to.be.a('object');    
    });
  });

});
