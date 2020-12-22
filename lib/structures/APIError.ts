export default class APIError extends Error {
    constructor(
        public readonly msg: string,
        public readonly method: string,
        public readonly path: string,
        public readonly status: number,
    ) {
        super(`[DiscordAPIError::${status}::${method}] - ${msg} ${path}`);
    }
}
