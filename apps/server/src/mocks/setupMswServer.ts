import { server } from "./node";
import { afterAll, beforeAll, afterEach } from "vitest";

// Start server before all tests
beforeAll(() => {
	server.listen({
		onUnhandledRequest(req, print) {
			if (
				req.url.startsWith("http://localhost") ||
				req.url.startsWith("http://127.0.0.1")
			) {
				return;
			}

			print.error();
		},
	});
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

// server.events.on("request:start", ({ request }) => {
// 	// biome-ignore lint/suspicious/noConsoleLog: <explanation>
// 	console.log("MSW intercepted:", request.method, request.url);
// });
