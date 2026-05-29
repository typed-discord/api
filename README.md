# About

**@typed-discord/api** is a **strongly-typed**, **lightweight** and **easy to use** Discord REST API client generated directly from the latest [official Discord OpenAPI specification](https://github.com/discord/discord-api-spec).

⚠️ This project is in its initial release phase and **breaking changes** may occur at any time.

# Quick Start

```ts
import { Bot } from "@typed-discord/api/clients";

const client = new Bot("your-bot-token");
const user = await client.getMyUser();
console.log(user);
```

# Known issues

- No dynamic typing at the moment, including string and array length
- Some FormData methods are currently not implemented
- No case conversion from snake_case
- OpenAPI Specification [Known issues](https://github.com/discord/discord-api-spec#known-issues)

# Documentation

The complete documentation is available at the [GitHub Pages site](https://typed-discord.github.io/api/).

# License

MIT © Adrien Simonnet
