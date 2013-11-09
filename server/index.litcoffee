Hello, World!

    express = require 'express'
    app = express()

So, we set up expressjs. Now we're going to serve the client files:

    app.use express.static "../client"

Now we're going to run the server:

    app.listen 8080
