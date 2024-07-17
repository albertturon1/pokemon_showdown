import type { Request, Response, Express } from "express";
import { generateOpenApi } from "@ts-rest/open-api";
import { serve, setup } from "swagger-ui-express";
import type { AppRouter } from "@ts-rest/core";
import express from "express";

export function setupDocs(app: Express, apiContract: AppRouter, port: number) {
	const openapiDocument = generateOpenApi(
		apiContract,
		{
			openapi: "3.0.0",
			info: { title: "Pokemon showdown API", version: "1.0.0" },
			servers: [
				{
					url: process.env.BASE_URL || `http://localhost:${port}/`,
				},
			],
		},
		{
			setOperationId: true,
		},
	);

	const apiDocs = express.Router();
	apiDocs.use(serve);
	apiDocs.get("/", setup(openapiDocument));

	app.use("/docs", apiDocs);
	app.get("/swagger.json", (req: Request, res: Response) => {
		res.contentType("application/json");
		res.send(JSON.stringify(openapiDocument, null, 2));
	});
}
