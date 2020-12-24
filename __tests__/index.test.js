const { Webhook } = require("../dist/index");
const client = new Webhook({
    //deactivated webhook url, whoopsie daisy
    "url": "https://discord.com/api/webhooks/791476416122322944/i038qCCdd-J5xd0O2i8FT5LMo5trbR3_FqG8LzfmHfS3dwoZ1k1-_9qTpL3zGLkUAbka"
});
(async () => {
    const msg = await client.send("Hi this is a test!");
})();