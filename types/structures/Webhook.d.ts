import RestHandler from '../rest/RestHandler';
export default class Webhook {
    readonly options: LoginOptions;
    readonly id: string;
    readonly token: string;
    private readonly baseURL;
    readonly URL: string;
    readonly rest: RestHandler;
    constructor(options: LoginOptions);
}
export interface LoginOptions {
    id?: string;
    token?: string;
    url?: string;
    apiURL?: string;
}
