import RestHandler from '../rest/RestHandler';
import Message, { MessageOptions } from './Message';
export default class Webhook {
    readonly options: LoginOptions;
    readonly id: string;
    readonly token: string;
    name: string | null;
    channelID: string | null;
    guildID: string | null;
    avatarURL: string | null;
    readonly baseURL: string;
    readonly util: {
        constants: {
            CDN: string;
        };
    };
    readonly URL: string;
    readonly rest: RestHandler;
    constructor(options: LoginOptions);
    send(content: string | MessageOptions): Promise<Message>;
    fetch(): Promise<this>;
}
export interface FetchWebhookResponse {
    type: number;
    id: string;
    name: string;
    avatar: string | null;
    channel_id: string;
    guild_id: string;
    application_id: string | null;
    token: string;
}
export interface LoginOptions {
    id?: string;
    token?: string;
    url?: string;
    apiURL?: string;
}
