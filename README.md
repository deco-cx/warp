# Warp

**Warp** is a simple tool that allows your locally running HTTP(s) servers to have a public URL, serving as an easy-to-self-host alternative to services like `ngrok`. Warp is implemented in Deno with the goal of providing flexibility and minimal dependencies.

The project has two main components:

- **Server**: Deployable on a server, it connects to the outside world and is accessible from any domain.
- **Client**: Runs locally to connect a given HTTP endpoint running on a local or non-public network.

## Server

The Warp server opens a single HTTP port to which the Warp client connects and upgrades to a WebSocket connection. Each request to this HTTP port is forwarded (based on the client's HOST header) to the corresponding connected Warp client connection, which then serves the request.

### Usage

To start the Warp server, import the `start` function from the Warp package and call it with the appropriate configuration.

#### Example

```typescript
import { start } from "jsr:@mcandeia/warp";

const port = 8080; // The port where the Warp server will listen
const apiKeys = ["YOUR_API_KEY1", "YOUR_API_KEY2"]; // Array of API keys for authentication

start({ port, apiKeys });
```

#### Parameters

- `port`: The port number where the Warp server will listen for connections.
- `apiKeys`: An array of API keys used for client authentication.

## Client

The Warp client connects to the Warp server. Upon connection, the client shares the given API key and the domain it wants to receive requests for.

### Usage

To connect a client to the Warp server, import the `connect` function from the Warp package and call it with the appropriate configuration.

#### Example

```typescript
import { connect } from "jsr:@mcandeia/warp";

const port = 3000; // The local port you want to expose
const domain = "www.your.domain.com"; // The domain name for your service
const server = "wss://YOUR_SERVER"; // The WebSocket URL of your Warp server
const token = "YOUR_TOKEN"; // The authentication token

const { registered, closed } = await connect({
  domain,
  localAddr: `http://localhost:${port}`,
  server,
  token,
});

await registered;
console.log("Client registered successfully");

closed.then(() => {
  console.log("Connection closed");
});
```

#### Parameters

- `domain`: The domain name that will be used to access your localhost service.
- `localAddr`: The local address of the service you want to expose (e.g., `http://localhost:3000`).
- `server`: The WebSocket URL of your Warp server (e.g., `wss://YOUR_SERVER`).
- `token`: The authentication token for connecting to the Warp server.

#### Return Values

- `registered`: A promise that resolves when the client has successfully registered with the server.
- `closed`: A promise that resolves when the connection to the server is closed.

## Example Workflow

Here’s a complete example of setting up a Warp server and client:

### Server

```typescript
import { start } from "jsr:@mcandeia/warp";

const port = 8080;
const apiKeys = ["YOUR_API_KEY1", "YOUR_API_KEY2"];

start({ port, apiKeys });
```

### Client

```typescript
import { connect } from "jsr:@mcandeia/warp";

const port = 3000;
const domain = "www.your.domain.com";
const server = "wss://YOUR_SERVER";
const token = "YOUR_TOKEN";

(async () => {
  const { registered, closed } = await connect({
    domain,
    localAddr: `http://localhost:${port}`,
    server,
    token,
  });

  await registered;
  console.log("Client registered successfully");

  closed.then(() => {
    console.log("Connection closed");
  });
})();
```

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that the API key you are using is listed in the `apiKeys` array on the server.
- **Connection Refused**: Check that the server is running and accessible at the specified WebSocket URL.
- **Domain Not Accessible**: Ensure that the domain name is correctly configured and pointing to the Warp server.
