const request = require("supertest");
const app = require("../../../app");
const email = `tes${Math.random().toString().substring(12)}@binar.co.id`;

describe("POST /v1/auth/register", () => {
	it("should response with 201 as status code", async () => {
		const name = "Tes",
			password = "123456";

		return request(app)
			.post("/v1/auth/register")
			.set("Content-Type", "application/json")
			.send({ name, email, password })
			.then((res) => {
				expect(res.statusCode).toBe(201);
				expect(res.body).toEqual(
					expect.objectContaining({
						...res.body,
					})
				);
			});
	});

	it("should response with 422 as status code", async () => {
		const name = "Tes",
			newEmail = "fikri@binar.co.id",
			password = "123456";

		return request(app)
			.post("/v1/auth/register")
			.set("Content-Type", "application/json")
			.send({ name, newEmail, password })
			.then((res) => {
				expect(res.statusCode).toBe(422);
				expect(res.body).toEqual(
					expect.objectContaining({
						error: {
							name: expect.any(String),
							message: expect.any(String),
							details: {
								email: expect.any(String),
							},
						},
					})
				);
			});
	});
});
