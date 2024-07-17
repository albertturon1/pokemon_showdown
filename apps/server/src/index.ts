import express from "express";
import cors from "cors";
import { createExpressEndpoints } from "@ts-rest/express";
import { z } from "zod";
import { extendZodWithOpenApi } from "@anatine/zod-openapi";
import { apiContract, apiRouter } from "./api";
import { setupDocs } from "./setupDocs";

extendZodWithOpenApi(z);
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    // biome-ignore lint/suspicious/noConsoleLog: ignore
    console.log(`Listening at http://localhost:${PORT}`);
});

setupDocs(app, apiContract, PORT);
createExpressEndpoints(apiContract, apiRouter, app);
