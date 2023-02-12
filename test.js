const supertest = require("supertest");
const app = require("./app.js");
const request = supertest(app);

// const supertest = require('supertest');
// const requestWithSupertest = supertest(server);

describe('should return a welcome message', () => {
    it('GET /', async () => {
      const response = await request.get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Welcome to Truffle Health!');
    });
  });


//   describe('GET /items', () => {
//     it('should return an empty array if there are no medical bills', async () => {
//       const response = await request.get('/items');
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toEqual([]);
//     });
  
//     it('should return a list of medical bills', async () => {
//       medicalBills = [      {        patientName: 'John Doe',        patientAddress: '123 Main St',        hospitalName: 'General Hospital',        dateOfService: '2022-01-01',        billAmount: 100.0      },      {        patientName: 'Jane Doe',        patientAddress: '456 Main St',        hospitalName: 'Childrens Hospital',        dateOfService: '2022-02-01',        billAmount: 200.0      }    ];
//       const response = await request.get('/items');
//       expect(response.statusCode).toBe(200);
//       expect(response.body).toEqual(medicalBills);
//     });
//   });

  describe('POST /items', () => {
    it('should create a new medical bill', async () => {
     medicalBills = [      {        patientName: 'John Doe',        patientAddress: '123 Main St',        hospitalName: 'General Hospital',        dateOfService: '2022-01-01',        billAmount: 100.0      },      {        patientName: 'Jane Doe',        patientAddress: '456 Main St',        hospitalName: 'Childrens Hospital',        dateOfService: '2022-02-01',        billAmount: 200.0      }    ];

      const bill = {
        patientName: 'Jane Doe',
        patientAddress: '456 Main St',
        hospitalName: 'Childrens Hospital',
        dateOfService: '2022-02-01',
        billAmount: 200.0
      };
      const response = await request.post('/items').send(bill);
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(bill);
      expect(medicalBills).toContainEqual(bill);
    });
  
    
  });
  
  
  describe('GET /items', () => {
    it('should return a list of medical bills', async () => {
      const res = await request
        .get('/items');
  
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });