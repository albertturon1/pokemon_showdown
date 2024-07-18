import type { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    function fallbackError() {
        return res.status(500).send({ errors: [{ message: "Something went wrong" }] });
    }
    if (isApiError(error)) {
        const status = error.response?.status ?? error.status ?? error.statusCode;

        if (!status) {
            return fallbackError()
        }

        return res.status(status).send({
            message: "API call error",
            error: error.response?.statusText
        })

    }
    return fallbackError()
};

function isApiError(error: unknown): error is ApiError {
    if (typeof error !== 'object' || error === null) {
        return false;
    }

    const hasResponse = 'response' in error && typeof error.response === 'object';
    const hasStatus = 'status' in error && typeof error.status === 'number';
    const hasStatusCode = 'statusCode' in error && typeof error.statusCode === 'number';
    const hasCode = 'code' in error && typeof error.code === 'string';

    return hasResponse || hasStatus || hasStatusCode || hasCode;
}

interface ApiError extends Error {
    response?: {
        status?: number;
        statusText?: string
        data: unknown;
        headers?: Record<PropertyKey, unknown>
    };
    status?: number;
    statusCode?: number;
    code?: string;
}