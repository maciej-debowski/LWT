# LWT - Light Web Tool
LWT is "templating system" based on first idea of PHP creator Rasmus Lerdorf.
In LWT you write your application login in *controller file* which is .js writen in nodejs.
Then showing it in .lwt file.

Example:

*index.lwt*

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Simple LWT Application</title>
    </head>
    <body>
        <?lwt write getName() /?>
    </body>
</html>
```

*controller.js*

```js
module.exports = {
    getName() {
        return "Hello!"
    }
}
```

*server.js*

```js
const lwt = require("lightwebtool")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send(lwt("index.lwt", require("./controller.js")))
})

app.listen(3000, () => console.log("LWT Application works!"))
```

# Documentation

1. To execute some functions from controller use this:
`<?lwt write functionName() ?>`

2. Other functions
There is no any other functions, only write.
