const bloodBankService = require("./bloodBankService");

//add blood bank service testing
test("add blood bank service if success return status code 200", () => {
  expect(bloodBankService.addBloodInServiceController).toBe(200);
});

//make request of blood bank testing
test("this will make request of blood bank request with status code 200", () => {
  expect(bloodBankService.makeBloodBankServiceRequestController).toBe(200);
});

//get all blood bank service testing
test("all blood bank service with status code 200", () => {
  expect(bloodBankService.getAllBloodBankServiceRequestController).toBe(200);
});

//update blood bank service testing
test("update blood Bank service with status code 200", () => {
  expect(bloodBankService.updateBloodBankServiceByIdController).toBe(200);
});

//blood bank service with group name testing
test("get blood bank service with group name ", () => {
  expect(bloodBankService.getBloodServiceByGroupNameController.toBe(200));
});