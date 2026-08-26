# About

**@typed-discord/rest** is a **strongly-typed**, **lightweight** and **easy to use** Discord REST API client generated directly from the latest [official Discord OpenAPI specification](https://github.com/discord/discord-api-spec).

⚠️ This project is in its initial release phase and **breaking changes** may occur at any time.

# Quick Start

```ts
import { Bot } from "@typed-discord/rest/clients";

const client = new Bot("your-bot-token");
const user = await client.getMyUser();
console.log(user);
```

# Known issues

- No dynamic typing at the moment, including string and array length
- Some FormData methods are currently not implemented
- OpenAPI Specification [Known issues](https://github.com/discord/discord-api-spec#known-issues)

# Documentation

The complete documentation is available at the [GitHub Pages site](https://typed-discord.github.io/rest/).

# License

MIT © Adrien Simonnet
