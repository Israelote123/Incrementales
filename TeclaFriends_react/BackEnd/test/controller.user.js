const userController = require("../controller/users");
const expect = require("chai").expect;

describe("Testing userController", () => {

    describe("Check login funcion", () => {
      it("Check return type ", async () => {
        let dataUser = {
          mail: "pozoleblanco@gmail.com",
          password: "pozoleBlanco33",
        };
        let result = await userController.accessLogin(dataUser);
        expect(result).to.be.a('object');
      });
    });

});