export default class APIError extends Error {
    readonly msg: string;
    readonly method: string;
    readonly path: string;
    readonly status: number;
    constructor(msg: string, method: string, path: string, status: number);
}
