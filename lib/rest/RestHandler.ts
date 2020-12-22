/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch, { Response } from 'node-fetch';

import APIError from '../structures/APIError';
import Webhook from '../structures/Webhook';

export default class RestHandler {
    private readonly URL: string;

    constructor(public readonly client: Webhook) {
        this.URL = client.URL;
        // https://discord.com/api/webhooks/:id/:token
    }

    private async make(data: MakeOptions): Promise<Response> {
        const request = await fetch(this.URL + data.path, {
            method: data.method,
            body: data.body ? JSON.stringify(data.body) : undefined,
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

    public get<T extends Record<string, any>>(path: string): Promise<Record<string, any> | T> {
        return this.make({
            method: 'GET',
            path: path,
        }).then(x => x.json());
    }

    public post<T extends Record<string, any>>(
        path: string,
        body: Record<string, any>,
    ): Promise<Record<string, any> | T> {
        return this.make({
            method: 'POST',
            body: body,
            path: path,
        }).then(async x => {
            const temp = await x.json();
            console.log(temp);
            return temp;
        });
    }

    public delete<T extends Record<string, any>>(
        path: string,
        body?: Record<string, any>,
    ): Promise<Record<string, any> | T> {
        return this.make({
            method: 'DELETE',
            body: body,
            path: path,
        }).then(x => x.json());
    }

    public patch<T extends Record<string, any>>(
        path: string,
        body: Record<string, any>,
    ): Promise<Record<string, any> | T> {
        return this.make({
            method: 'PATCH',
            body: body,
            path: path,
        }).then(x => x.json());
    }

    public put<T extends Record<string, any>>(
        path: string,
        body?: Record<string, any>,
    ): Promise<Record<string, any> | T> {
        return this.make({
            method: 'PUT',
            body: body,
            path: path,
        }).then(x => x.json());
    }
}

export interface MakeOptions {
    method: string;
    path: string;
    body?: Record<string, string>;
}
