import RestHandler from '../rest/RestHandler';
import Util from '../util/constants';
import { isConstantString } from '../util/types';
import Embed from './Embed';
import Message, { MessageOptions } from './Message';

/**
 * The main Webhook client
 *
 * ```
 * import { Webhook } from "discord-webhook-client"
 * ```
 */
export default class Webhook {
    /**
     * ID of the webhook, yoinked from the URL if provided
     */
    public readonly id: string;

    /**
     * Token of the webhook, yoinked from the URL if provided
     */
    public readonly token: string;

    /**
     * Name of the webhook
     */
    public name: string | null = null;

    /**
     * ID of the channel this webhook belongs to
     */
    public channelID: string | null = null;

    /**
     * ID of the guild this webhook belongs to
     */
    public guildID: string | null = null;

    /**
     * Avatar URL of the webhook
     */
    public avatarURL: string | null = null;

    /**
     * Base URL of the webhook url, the domain discord resides at and the path
     * @private
     */
    private readonly baseURL: string;

    /**
     * Webhook URL, constructed from the ID and Token if not constructed with a URL
     */
    public readonly URL: string;

    /**
     * Rest manager for sending HTTP requests
     * @private
     */
    private readonly rest: RestHandler;

    constructor(readonly options: LoginOptions) {
        this.baseURL = 'https://discord.com/api/webhooks' ?? options.apiURL;
        this.rest = new RestHandler(this);

        if ('url' in options && options.url !== undefined) {
            this.URL = options.url;
            const temp = options.url.match(/discord.com\/api\/webhooks\/([^/]+)\/([^/]+)/);
            if (!temp) throw new Error('Not a proper discord webhook URL! Alternatively, you can provide an ID/token');
            this.id = temp[1];
            this.token = temp[2];
        } else if ('id' in options && options.id !== undefined && 'token' in options && options.token !== undefined) {
            this.id = options.id;
            this.token = options.token;
            this.URL = `${this.baseURL}/${this.id}/${this.token}`;
        } else {
            throw new TypeError(
                'You must provide either a webhook URL or a webhook ID/Token when constructing the Webhook Client',
            );
        }
    }

    /**
     * Send a message to the channel this webhook belongs to
     *
     * @param content The content of the message to send.
     * @returns Returns a constructed message object.
     */
    public send(content: string | MessageOptions): Promise<Message> {
        const ICS = isConstantString(content);
        const extractedEmbed = ICS ? {} : (content as MessageOptions).embed;
        return this.rest
            .post(`/${this.id}/${this.token}`, {
                content: ICS ? content : '',
                embed: extractedEmbed instanceof Embed ? extractedEmbed.toEmbed() : extractedEmbed,
            })
            .then(data => new Message(data));
    }

    /**
     * Fetch info regarding this webhook
     *
     * @returns This webhook object with populated data
     */
    public fetch(): Promise<this> {
        return this.rest.get<FetchWebhookResponse>(`/${this.id}/${this.token}`).then(data => {
            this.name = data.name;
            this.avatarURL = `${Util.CDN}/avatars/${this.id}/${data.avatar}`;
            this.channelID = data.channel_id;
            this.guildID = data.guild_id;

            return this;
        });
    }
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
