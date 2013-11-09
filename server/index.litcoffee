Hello, World!

    express = require 'express'
    app = express()

So, we set up expressjs. Now we're going to serve the client files:

    app.use express.static "../client"
    http = require 'http'
    app.use (req,res,next) ->
        console.log req.originalUrl
        options = {
            host: 'www.kominactie.nl',
            port: 80,
            path: req.originalUrl
        }
        http.get options, (re) ->
            completeData = ""
            re.on "data", (chunk) ->
                completeData += chunk
            re.on "end", () ->
                res.send completeData

Now we're going to run the server:

    app.listen 8080
