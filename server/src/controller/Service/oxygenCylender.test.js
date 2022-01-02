const oxygenCylender= require('./oxygenCylender');

//create oxygenCylender testing

test("create oxygen cylender with 200 status code", () => {
    expect(oxygenCylender.createOxygenCylenderService).toBe(200);
  });

  //fetch all oxygen services testing

test("get all oxygen service with status code 200", () => {
    expect(oxygenCylender.getAllOxygenServiceController).toBe(200);
  });

  //delete oxygenCylender testing
test("this will delete certain oxygenCylender with status code 200 if success", () => {
    expect(oxygenCylender.deleteTemporaryOxygenCylenderByIdController).toBe(200);
  });

  //all approved oxygen cylinder request

test("return approved oxygen cylinder with status code 200", () => {
    expect(oxygenCylender.getAllOxygenUnApproveServiceRequestController).toBe(200);
  });
