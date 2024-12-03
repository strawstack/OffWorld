import { writeFileSync } from 'fs';

const cmds = {
    writeFile: writeFileSync
};

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const path = new URL(req.url).pathname;

        if (path === "/") return new Response(Bun.file('./index.html'));

        if (req.method === "POST" && path === "/cmd") {
            const data = await req.json();
            const result = cmds[data.cmd](...data.args);
            console.log(`result: ${result}`);
            return new Response("success");
        }

        return new Response(Bun.file(`./${path}`));
    },
});

console.log(`Listening on localhost:${server.port}`);