import express from "express";
import cors from "cors";
import { createExpressEndpoints } from "@ts-rest/express";
import { z } from "zod";
import { extendZodWithOpenApi } from "@anatine/zod-openapi";
import { apiContract, apiRouter } from "./api";
import { setupDocs } from "./setupDocs";
import { errorHandler } from "./errorHandling";
import { env } from "./env";

const { PORT, NODE_ENV, HOST } = env;

extendZodWithOpenApi(z);
export const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (env.NODE_ENV !== "production") {
	const morgan = await import("morgan").then((e) => e.default);
	app.use(morgan("dev"));
}

app.listen(PORT, () => {
	// biome-ignore lint/suspicious/noConsoleLog: ignore
	console.log(`Listening at ${HOST}:${PORT}`);
});

setupDocs(app, apiContract, PORT);
createExpressEndpoints(apiContract, apiRouter, app, {
	//https://ts-rest.com/docs/express/#request-validation-error-handling
	//zod errors are returned as 400 by default and are not available in the middleware - using requestValidationErrorHandler allows to modify how they are handled
	requestValidationErrorHandler:
		NODE_ENV === "production"
			? //hiding validation error details in production
				(_err, _req, res) => {
					return res.status(422).json({
						message: "Validation error",
					});
				}
			: "default",
});

//keeping it as last
app.use(errorHandler);
