## Testing on a phone / other device via local network

When accessing the dev server via the network IP (e.g. `http://192.168.15.69:3000`) instead of `localhost`, Next.js (16+) blocks dev-only requests — including the HMR WebSocket — from that origin by default (a DNS-rebinding protection). This breaks hydration silently: the page renders fine, native CSS (`:active`, etc.) still works, but **no `onClick`/event handlers ever fire**, with no visible error unless you check the console for repeated `WebSocket connection to 'ws://<ip>:3000/_next/hmr...' failed` messages.

**Fix:** add the network IP to `allowedDevOrigins` in `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.15.69"], // or whatever the current LAN IP is
};
```
Restart the dev server after editing `next.config.ts` (it doesn't hot-reload).

If the IP changes (different network), update this value or the same symptom (buttons/clicks silently not working when tested from a phone) will reappear.
