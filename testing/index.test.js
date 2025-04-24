import {axios} from "axios";
// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;

const BACKEND_URL = "http://localhost:3001";
  describe("Authentication", () => {
    test("User is able to sign up only once", async () => {
      const username = "harry" + Math.random(); 
      const password = "123456";
      const email = "a@b.com";
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
        email
      });
  
      expect(response.status).toBe(200);
      const updatedResponse = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
        email,
      });
  
      expect(updatedResponse.status).toBe(400);
    });
  
    test("Signup request fails if the username is empty", async () => {
      const username = `harry-${Math.random()}`; 
      const password = "123456";
      const email = "a@b.com";
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        password,
        email,
      });
  
      expect(response.status).toBe(400);
    });
  
    test("Signin succeeds if the username, password and email are correct", async () => {
      const username = `harry-${Math.random()}`;
      const password = "123456";
      const email = "a@b.com";
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
        email,
        
      });
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });
  
      expect(response.status).toBe(200);
      expect(response.data.token).toBeDefined();
    });
  
    test("Signin fails if the username, password are incorrect", async () => {
      const username = `harry-${Math.random()}`;
      const password = "123456";
  
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username: "WrongUsername",
        password,
      });
  
      expect(response.status).toBe(403);
    });
    
    test("Signin fails if the password and email are incorrect", async () => {
      const username = `harry-${Math.random()}`;
      const password = "123456";
      const email = "a@b.com";
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
        email,
      });
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
        email: "WrongEmail",
      });
  
      expect(response.status).toBe(403);
    });
  });