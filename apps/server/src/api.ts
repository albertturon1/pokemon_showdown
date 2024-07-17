import { pokeapiClient, pokeapiSchemas } from "./generated/pokeapi";
import { initContract } from "@ts-rest/core";
import { initServer } from "@ts-rest/express";
import { z } from "zod";

const c = initContract();
export const apiContract = c.router({
	getPokemonsCompare: {
		method: "GET",
		path: "/pokemons/compare",
		query: z.object({
			pokemons: z
				.string()
				.transform((data) => data.split(",").map((e) => e.trim())),
		}),
		responses: {
			200: z.array(pokeapiSchemas.PokemonDetail),
		},
	},
});

const s = initServer();
export const apiRouter = s.router(apiContract, {
	getPokemonsCompare: async ({ query: { pokemons } }) => {
		const comparedPokemons = await Promise.all(
			pokemons.map((id) => {
				return pokeapiClient.pokemon_retrieve({
					params: {
						id,
					},
				});
			}),
		);

		return {
			status: 200,
			body: comparedPokemons,
		};
	},
});
