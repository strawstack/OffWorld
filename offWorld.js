export async function writeFile(...args) {
    const res = await fetch("http://localhost:3000/cmd", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cmd: "writeFile",
            args
        })
    });
    return res;
}