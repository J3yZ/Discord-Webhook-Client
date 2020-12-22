import Embed, { EmbedData } from './Embed';
import Webhook from './Webhook';

export default class Message {
    public readonly content: string;
    public readonly id: string;
    public readonly channelID: string | null;
    public readonly guildID: string | null;
    /*
    Public readonly author: {
        id: string;
        username: string;
        discriminator: string;
        avatar: string | null;
    };
    public readonly tag: string;
    */

    constructor(data: MessageData, public readonly webhook: Webhook) {
        this.content = data.content;
        this.id = data.id;
        this.channelID = data.channel_id;
        this.guildID = data.guild_id;
        /*
        This.author = {
            id: data.author.id,
            username: data.author.username,
            discriminator: data.author.discriminator,
            avatar: data.author.avatar ?? null,
        };
        this.tag = `${this.author.username}#${this.author.discriminator}`;
        */
    }
    /* AuthorAvatarURL(format?: string): string {
        return `${this.webhook.util.constants.CDN}/${this.author.id}/${this.author.avatar}.${format ?? '.png'}`;
    } */
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

/*
Export interface WebhookMessageResponse extends Record<string, any> {
    author: {
        id: string;
        username: string;
        discriminator: string;
        avatar?: string;
    };
}
*/
