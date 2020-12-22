# Discord-Webhook-Client  
A Simple wrapper around Discord Webhook endpoints.

## Table of Contents  
* [About](#about)  
* [Documentation](#documentation)  
* [Installation](#installation)  
* [Contributing](#contributing)  
* [License](#LICENSING)  

## Example Usage  
```javascript
const { Webhook } = require("discord-webhook-client");
// import { Webhook } from "discord-webhook-client";

const webhook = new Webhook(
    {
        url: "webhook-url"
    });
/*
or new Webhook(
    {
        id: "webhook-id", 
        token: "webhook-token
    })
*/

webhook.send("message");
webhook.send({
    embed: {
        // ...embed data
    }
})
webhook.send({
    new Embed().setTitle("Test Embed!") //... and other embed builder methods
});
webhook.editMessage("msg_id", "new content");
```


## About  
This project is simply a very minimalistic wrapper over the Discord Webhook API. The intention is not to cache anything and to make this webhook client as minimalistic as possible. It is written in TypeScript for included typings.

## Installation  
    You are expected to have a reasonably up-to-date Node.js version. The library is only testing on the LTS version of Node.js as of this date (currently Node v14).

Install using NPM
```
npm install discord-webhook-client
```

## Documentation  
Documentation is avaliable [here](https://zaida04.github.io/Discord-Webhook-Client/)

## Contributing  
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Please ensure your commits pass the tests, lints, and builds. This means you should test it locally before pushing.**

## LICENSING

> **discord-webhook-client** © [zaida04](https://github.com/zaida04), Released under the [MIT](https://github.com/zaida04/discord-webhook-client/blob/master/LICENSE) License.  