const express = require("express"); // import the express library
const app = express(); // create an instance of the express application
const port = 3000; // define the port number to listen on

const bodyParser = require("body-parser");


app.use(bodyParser.json());

let medicalBills = []; // initialize an empty array to store medical bills

app.use(express.json()); // parse JSON request bodies


app.get("/", (req, res) => {
    res.send("Welcome to Truffle Health!"); // starting endpoint
  });

  

// endpoint to retrieve a list of medical bills
app.get("/items", (req, res) => {
  res.send(medicalBills); // send the medical bills array as the response
});

// endpoint to create a new medical bill
app.post("/items", (req, res) => {
// if no body
    if (res.body=={}) {
        return res.status(400).send({ error: "Request body is missing" });
      }

      

  // create a new bill object with the request body data
  const bill = {
    patientName: req.body.patientName,
    patientAddress: req.body.patientAddress,
    hospitalName: req.body.hospitalName,
    dateOfService: req.body.dateOfService,
    billAmount: req.body.billAmount
  };
  medicalBills.push(bill); // add the new bill to the medical bills array
  res.send(bill); // send the bill object as the response
});

// start the express application and listen on the specified port
app.listen(port, () => {
  console.log(`Medical Bill Upload Service listening at http://localhost:${port}`);
});
module.exports = app;
