import dotenv from "dotenv";
import { z } from "zod";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const envSchema = z.object({
	PORT: z.coerce.number(),
	HOST: z.string(),
	NODE_ENV: z.string(),
	POKEAPI_URL: z.string(),
	POKEAPI_URL_WITHOUT_VERSION: z.string(),
});

export const env = envSchema.parse({
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	HOST: process.env.HOST,
	POKEAPI_URL: process.env.POKEAPI_URL,
	POKEAPI_URL_WITHOUT_VERSION: process.env.POKEAPI_URL_WITHOUT_VERSION,
});
