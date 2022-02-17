const userController = require("../controller/users");
const expect =require ("chai").expect;
const should = require('chai').should()


//test de funciones de usuario comprobamos que regrese un array que contenga minimo otro array y a su vez ese array
//contiene un objeto
//excepto para el login, que regresara un objeto
describe("testing userController",()=>{
 
  describe("check datos function",()=>{
    it("check return type",async ()=>{
      let result=await userController.getDatos("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })

  
  describe("check datos function",()=>{
    it("check return type",async ()=>{
      let result=await userController. getAbility("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })
 

  describe("check course function",()=>{
    it("check return type",async ()=>{
      let result=await userController.getCourse ("jantonios44@hotmail.com")
      expect (result).to.be.a('array')
      expect(result[0]).to.be.a('array')
      expect(result[0][0]).to.be.a('object')
    })
   
  })

  describe("check friends function",()=>{
    it("check return type",async ()=>{
      let result=await userController.getFriends ("jantonios44@hotmail.com")
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






