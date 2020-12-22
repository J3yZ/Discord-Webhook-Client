const { Webhook } = require("../dist/index");
const client = new Webhook({
    //deactivated webhook url, whoopsie daisy
    "url": "https://discord.com/api/webhooks/791002372431544370/ACUuELMPKi3hi7piA5fcTq-kpqXSXGvLMwRy9Cc6FAG1wLA7cPWozysXH6dkUJdvJr7w"
});

client.send("Hi this is a test!");