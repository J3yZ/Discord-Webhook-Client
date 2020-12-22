import Embed, { EmbedData } from './Embed';
import Webhook from './Webhook';
export default class Message {
    readonly webhook: Webhook;
    readonly content: string;
    readonly id: string;
    readonly channelID: string | null;
    readonly guildID: string | null;
    constructor(data: MessageData, webhook: Webhook);
}
export interface MessageOptions {
    embed: Record<string, any> | Embed;
}
export interface MessageData {
    content: string;
    id: string;
    channel_id: string | null;
    guild_id: string | null;
    embed: EmbedData | Embed;
}
