const userController = require("../controller/users");
const expect = require("chai").expect;

describe("Testing userController", () => {

    describe("Check search funcion", () => {
      it("Check return type ", async () => {
        let result = await userController.getBusqueda("J");
        expect(result).to.be.a('array');
      });
    });

});