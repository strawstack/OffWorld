# OffWorld

A Javascript module that communicates with a local server to calll common Nodejs functions like `writeFile`. 

# How to Use

1. Run `bun index.js` in the project root.
2. A local server will start at `localhost:3000`.
3. Place code like this in your html:

```html
<script type="module">
    import offWorld from './offWorld.js';

    const { writeFile } = offWorld({
      server: "http://localhost:3000" 
    });
    
    writeFile("test.txt", "file contents");
</script>
```

2. `OffWorld` takes your call to `writeFile` and sends it to the localhost server where it gets run.
3. Note, this allows one to effectively call various Nodejs functions from Javascript.

# Why Go OffWorld?

Javascript in the client is sandboxed and is limited in some ways that Nodejs is not. `OffWorld` allows Javscript to access functionality that only Nodejs typically has. One might wish to save state from a website to their local machine, or read a text file from their local filesystem into a website.
