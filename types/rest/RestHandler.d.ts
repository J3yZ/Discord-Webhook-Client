import Webhook from '../structures/Webhook';
export default class RestHandler {
    readonly client: Webhook;
    constructor(client: Webhook);
    private make;
    get<T extends Record<string, any>>(path: string): Promise<T | Record<string, any>>;
    post<T extends Record<string, any>>(path: string, body: Record<string, any>): Promise<T | Record<string, any>>;
    delete<T extends Record<string, any>>(path: string, body?: Record<string, any>): Promise<T | Record<string, any>>;
    patch<T extends Record<string, any>>(path: string, body: Record<string, any>): Promise<T | Record<string, any>>;
    put<T extends Record<string, any>>(path: string, body?: Record<string, any>): Promise<T | Record<string, any>>;
}
export interface MakeOptions {
    method: string;
    path: string;
    body?: Record<string, string>;
}
