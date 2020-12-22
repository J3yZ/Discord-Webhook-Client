/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch, { Response } from 'node-fetch';

import APIError from '../structures/APIError';
import Webhook from '../structures/Webhook';

export default class RestHandler {
    constructor(public readonly client: Webhook) {
        // https://discord.com/api/webhooks/:id/:token
    }

    private async make(data: MakeOptions): Promise<Response> {
        const request = await fetch(this.client.baseURL + data.path, {
            method: data.method,
            body: data.body ? JSON.stringify(data.body) : '{}',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (request.status < 200 || request.status > 299) {
            const parsedRequest = await request.json();
            throw new APIError(parsedRequest.message, data.method, data.path, request.status);
        }

        return request;
    }

    public get<T extends Record<string, any>>(path: string): Promise<T | Record<string, any>> {
        return this.make({
            method: 'GET',
            path: path,
        }).then(x => x.json().catch(() => ({})));
    }

    public post<T extends Record<string, any>>(
        path: string,
        body: Record<string, any>,
    ): Promise<T | Record<string, any>> {
        return this.make({
            method: 'POST',
            body: body,
            path: path,
        }).then(x => x.json().catch(() => ({})));
    }

    public delete<T extends Record<string, any>>(
        path: string,
        body?: Record<string, any>,
    ): Promise<T | Record<string, any>> {
        return this.make({
            method: 'DELETE',
            body: body,
            path: path,
        }).then(x => x.json().catch(() => ({})));
    }

    public patch<T extends Record<string, any>>(
        path: string,
        body: Record<string, any>,
    ): Promise<T | Record<string, any>> {
        return this.make({
            method: 'PATCH',
            body: body,
            path: path,
        }).then(x => x.json().catch(() => ({})));
    }

    public put<T extends Record<string, any>>(
        path: string,
        body?: Record<string, any>,
    ): Promise<T | Record<string, any>> {
        return this.make({
            method: 'PUT',
            body: body,
            path: path,
        }).then(x => x.json().catch(() => ({})));
    }
}

export interface MakeOptions {
    method: string;
    path: string;
    body?: Record<string, string>;
}
