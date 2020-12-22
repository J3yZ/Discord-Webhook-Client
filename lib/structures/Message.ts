import Embed from './Embed';

export default class Message {
    constructor(data: any) {}
}

export interface MessageOptions {
    embed: Record<string, any> | Embed;
}

export interface WebhookMessageResponse {
    content: string;
    id: string;
    channel_id: string;
    guild_id: string;
    author: {
        id: string;
        username: string;
        discriminator: string;
        avatar?: string;
    };
    member: {
        nick: string | null;
        roles: string[];
        joined_at: string;
    };
}
