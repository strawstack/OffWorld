import { 
    writeFileSync,
    readFileSync
} from 'fs';

const cmds = {
    writeFile: writeFileSync,
    readFile: readFileSync
};

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const path = new URL(req.url).pathname;

        if (path === "/") return new Response(Bun.file('./index.html'));

        if (req.method === "POST" && path === "/cmd") {
            const data = await req.json();
            const result = cmds[data.cmd](...data.args);
            return new Response("success");
        }

        return new Response(Bun.file(`./${path}`));
    },
});

console.log(`Listening on localhost:${server.port}`);