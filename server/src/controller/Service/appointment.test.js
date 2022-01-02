const appointment = require("./appointment");

//payment success testing

test("this test will return payment success with 200", () => {
  expect(appointment.appointmentPaymentSuccessController).toBe(200);
});

//appoinment failed controller
test("this will return an error code of 400", () => {
  expect(appointment.paymentFailedController).toBe(400);
});

// test("",()=>{
//     expect(appointment.)
// }).toBe();
