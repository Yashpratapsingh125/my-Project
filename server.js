//Basic express server
const express = require('express')

const PORT = 3000

//creating an app using express

const app = express()

//create a route

app.get('/' ,(req, res) => {
    res.send("Hello from my first server")
}
)
// start the server
app.listen(PORT,'localhost',() => {
    console.log('Server started successfully')
})
