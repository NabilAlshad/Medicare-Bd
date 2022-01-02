const prescription = require("./prescription");

//create prescription testing
test("if prescription is created then it will return status code 200", () => {
  expect(prescription.createPrescriptionController).toBe(200);
});

//delete prescription testing

test("delete prescription service if successfully status code 200", () => {
  expect(prescription.deletePrescriptionByIdController).toBe(200);
});

// update prescription testing

test("update prescription service with status code 200", () => {
  expect(prescription.updatePrescriptionByIdController).toBe(200);
});

//prescription by certain id unit testing

test("this will receive certain prescription by a individiual id and return status code 200", () => {
  expect(prescription.getPrescriptionById).toBe(200);
});
