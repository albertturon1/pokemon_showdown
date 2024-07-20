import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "./app";
import { server } from "./mocks/node";
import { http, HttpResponse } from "msw";
import { apiContractPaths } from "./api";
import { env } from "./env";

const idsItems = ["ditto", "phantump"];
const ids = idsItems.join(",");

describe(`GET ${apiContractPaths["/pokemons/compare"]}`, () => {
	it("should return all products", async () => {
		const res = await request(app)
			.get("/pokemons/compare")
			.query({ ids })
			.expect(200);

		expect(res.statusCode).toBe(200);
	});

	it("should throw error on with with less than 2 query ids", async () => {
		const res = await request(app)
			.get("/pokemons/compare")
			.query({ ids: idsItems.length > 0 ? idsItems[0] : undefined });

		expect(res.statusCode).not.toBe(200);
	});

	it("should throw error on api call fail", async () => {
		//mocking NotFound from pokemon endpoint
		server.use(
			http.get(`${env.POKEAPI_URL}/pokemon/${idsItems[0]}`, () => {
				return HttpResponse.json(null, {
					status: 404,
				});
			}),
		);

		const res = await request(app).get("/pokemons/compare").query({ ids });

		expect(res.statusCode).not.toBe(200);
	});
});
