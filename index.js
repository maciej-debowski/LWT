const fs = require("fs")

function compileLWT(file, controller) {
    let out = ""
    const input = fs.readFileSync(file, "utf-8")
    out = input

    const splitted = input.split("<?lwt")

    splitted.forEach((item, key) => {
        if(key == 0) return

        const body = item.split("/?>")[0];
        const whole = `<?lwt${body}/?>`
        console.log(whole)
        if(body.indexOf("write") == -1) {
            //
            console.log("Warning: Cannot find any LWT rule in line.")
        }
        else {
            const function_ = body.split("write")[1].split(" ").join("").split("()").join("")
            console.log(function_)
            out = out.replace(whole, controller[function_]())
        }   
    })

    return out
}

// console.log(compileLWT("tests/index.lwt", require("./tests/controller.js")))