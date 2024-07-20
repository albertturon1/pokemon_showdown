import { pokeapiClient, pokeapiSchemas } from "./generated/pokeapi";
import { initContract } from "@ts-rest/core";
import { initServer } from "@ts-rest/express";
import { z } from "zod";
import type { Entries } from "type-fest";

const c = initContract();
export const apiContract = c.router({
	getPokemonsCompare: {
		method: "GET",
		path: "/pokemons/compare",
		query: z.object({
			ids: z
				.string()
				.transform((data) => data.split(",").map((e) => e.trim()))
				.refine((data) => data.length > 1, "at least 2 ids are required"),
		}),
		responses: {
			200: z.array(pokeapiSchemas.PokemonDetail),
		},
	},
});

const s = initServer();

export const apiRouter = s.router(apiContract, {
	getPokemonsCompare: async ({ query: { ids } }) => {
		const comparedPokemons = await Promise.all(
			ids.map((id) => {
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

const apiContractEntries = Object.entries(apiContract) as Entries<
	typeof apiContract
>;
export const apiContractPaths = apiContractEntries.reduce(
	(acc, [_, endpointProps]) => {
		acc[endpointProps.path] = endpointProps.path;
		return acc;
	},
	{} as ApiContractPaths,
);

export type ApiContract = typeof apiContract;
export type ApiContractPaths = {
	[P in ExtractPaths<ApiContract>]: P;
};

type ExtractPaths<T> = {
	[K in keyof T]: T[K] extends { path: infer P } ? P : never;
}[keyof T];
