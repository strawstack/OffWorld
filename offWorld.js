// Strings in the list below become keys on an exported object
// that has the above rpc function as values
export default function offWorld({ server }) {

    function rpcFactory(name) {
        return async function rpc(...args) {
            const res = await fetch(`${server}/cmd`, {
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

    return [
        'writeFile',
        'second'
    ].reduce((a, c) => { a[c] = rpcFactory(c); return a; }, {});
}