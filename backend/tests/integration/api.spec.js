const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("API tests", () => {
  afterAll(async () => {
    await connection.destroy();
  });
  describe("Incidents", () => {
    beforeAll(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
    });
    it("should be able to create a new ONG", async () => {
      const response = await request(app)
        .post("/ongs")
        .send({
          name: "e-9462",
          email: "daniel_joelma@hotmail.com",
          whatsapp: "5587996520827",
          city: "Petrolina",
          uf: "PE"
        });

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toHaveLength(8);
    });

    it("should be able to create Incident", async () => {
      let response = await request(app).get("/ongs");

      const ong = response.body[0];

      response = await request(app)
        .post("/incidents")
        .set("Authorization", ong.id)
        .send({
          title: "Caso especial",
          description: "Caso especial de teste",
          value: 350
        });

      expect(response.body).toHaveProperty("id");
    });

    it("should be able to list Incidents", async () => {
      const response = await request(app).get("/incidents");

      const expected = [
        {
          id: response.body[0].id,
          title: "Caso especial",
          description: "Caso especial de teste",
          value: 350,
          ong_id: response.body[0].ong_id,
          name: response.body[0].name,
          email: response.body[0].email,
          whatsapp: response.body[0].whatsapp,
          city: response.body[0].city,
          uf: response.body[0].uf
        }
      ];

      expect(response.body).toEqual(expect.arrayContaining(expected));
    });

    it("should be able to delete Incidents", async () => {
      let response = await request(app).get("/incidents");

      const id = response.body[0].id;
      const ong_id = response.body[0].ong_id;

      response = await request(app)
        .delete(`/incidents/${id}`)
        .set("Authorization", ong_id)
        .send({
          title: "Caso especial",
          description: "Caso especial de teste",
          value: 350
        });

      expect(response.status).toEqual(204);
    });
  });

  describe("Login", () => {
    beforeAll(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
    });
    it("should be able to create a new ONG", async () => {
      const response = await request(app)
        .post("/ongs")
        .send({
          name: "e-9462",
          email: "daniel_joelma@hotmail.com",
          whatsapp: "5587996520827",
          city: "Petrolina",
          uf: "PE"
        });

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toHaveLength(8);
    });

    it("should be able to login", async () => {
      let response = await request(app).get("/ongs");

      const id = response.body[0].id;

      response = await request(app)
        .post("/sessions")
        .send({
          id: id
        });

      expect(response.body.name).toMatch("e-9462");
    });
  });

  describe("Profile", () => {
    beforeAll(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
    });
    it("should be able to create a new ONG", async () => {
      const response = await request(app)
        .post("/ongs")
        .send({
          name: "e-9462",
          email: "daniel_joelma@hotmail.com",
          whatsapp: "5587996520827",
          city: "Petrolina",
          uf: "PE"
        });

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toHaveLength(8);
    });

    it("should be able to create Incident", async () => {
      let response = await request(app).get("/ongs");

      const ong = response.body[0];

      response = await request(app)
        .post("/incidents")
        .set("Authorization", ong.id)
        .send({
          title: "Caso especial",
          description: "Caso especial de teste",
          value: 350
        });

      expect(response.body).toHaveProperty("id");
    });

    it("should be able to list Incident from an Ong", async () => {
      let response = await request(app).get("/ongs");

      const id = response.body[0].id;

      response = await request(app)
        .get("/profile")
        .set("Authorization", id);

      expect(response.body[0].ong_id).toEqual(id);
    });
  });

  describe("ONG", () => {
    beforeAll(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
    });
    it("should be able to create a new ONG", async () => {
      const response = await request(app)
        .post("/ongs")
        .send({
          name: "e-9462",
          email: "daniel_joelma@hotmail.com",
          whatsapp: "5587996520827",
          city: "Petrolina",
          uf: "PE"
        });

      expect(response.body).toHaveProperty("id");
      expect(response.body.id).toHaveLength(8);
    });

    it("should be able to list ONGs", async () => {
      const response = await request(app).get("/ongs");

      const expected = [
        {
          id: response.body[0].id,
          name: "e-9462",
          email: "daniel_joelma@hotmail.com",
          whatsapp: "5587996520827",
          city: "Petrolina",
          uf: "PE"
        }
      ];

      expect(response.body).toEqual(expect.arrayContaining(expected));
    });
  });
});
