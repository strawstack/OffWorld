function rpcFactory(name) {
    return async function rpc(...args) {
        const res = await fetch("http://localhost:3000/cmd", {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cmd: name,
                args
            })
        });
        return res;
    }
}

// Strings in the list below become keys on an exported object
// that has the above rpc function as values
export default [
    'writeFile',
    'second'
].reduce((a, c) => { a[c] = rpcFactory(c); return a; }, {})