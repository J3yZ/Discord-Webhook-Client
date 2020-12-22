import Webhook from '../structures/Webhook';
export default class RestHandler {
    readonly client: Webhook;
    private readonly URL;
    constructor(client: Webhook);
    private make;
    get<T extends Record<string, any>>(path: string): Promise<Record<string, any> | T>;
    post<T extends Record<string, any>>(path: string, body: Record<string, any>): Promise<Record<string, any> | T>;
    delete<T extends Record<string, any>>(path: string, body?: Record<string, any>): Promise<Record<string, any> | T>;
    patch<T extends Record<string, any>>(path: string, body: Record<string, any>): Promise<Record<string, any> | T>;
    put<T extends Record<string, any>>(path: string, body?: Record<string, any>): Promise<Record<string, any> | T>;
}
export interface MakeOptions {
    method: string;
    path: string;
    body?: Record<string, string>;
}
